import axios from 'axios'
import {
	stringify
} from "qs";

const apiDomain = `${window.location.protocol}//whrdd.f3322.net:8889`
axios.defaults.timeout = 30000
axios.defaults.headers.common['reqClient'] = 'dj-web'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true // 跨域时是否需要凭据

const axiosInstance = axios.create({
	transformRequest: [
		// axios.post 会自动转换成 Content-Type: application/json;charset=UTF-8
		data => {
			const contentType =
				axiosInstance.defaults.headers.post["Content-Type"];
			if (contentType.indexOf("application/json") !== -1) {
				return data ? JSON.stringify(data) : data;
			}
			return data ? stringify(data) : data;
		}
	]
})

axiosInstance.interceptors.request.use(
	config => {
		// doLogin.do的時候不能帶上passport
		if (!~config.url.indexOf("/login/doLogin.do")) {
			// // 判断下当前web缓存中是否存在passport
			const passport = window.cacher.get("passport");
			if (passport) {
				// 判断是否存在token，如果存在的话，则每个http header都加上token
				config.headers.common["passport"] = passport; // 从缓存中获取此名称的值;
			}
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

// 动态创建api请求接口
// this.$http.activity.getApi({}).then().catch()

export const createAPI = (...apiMapData) => {
	let httpWrap = {};
	apiMapData.forEach(mapItem => {
		const kv = (httpWrap[mapItem.module] = {});
		mapItem.configs.forEach(conf => {
			kv[conf.outKey] = ((conf) => {
				// 使用匿名立即执行函数，获取接口实际调用的参数
				//  有闭包缓存了conf
				return (clientParam) => {
					return new Promise((resolve, reject) => {
						axiosInstance.defaults.headers.post["Content-Type"] =
							conf.contentType === "json" ?
							"application/json;charset=UTF-8" :
							"application/x-www-form-urlencoded;charset=UTF-8";
						let param = {}
						let missingParams = [];
						conf.reqParams.forEach(item => {
							if (typeof item === "object") {
								if (item.name in clientParam) {
									param[item.name] = clientParam[item.name];
								} else if ('default' in item) {
									// 对象有默认值
									param[item.name] = item.default
								} else {
									// 少传该参数
									missingParams.push(item.name);
								}
							} else {
								// string
								if (item in clientParam) {
									param[item] = clientParam[item];
								} else {
									missingParams.push(item);
								}
							}
						})
						if (missingParams.length) {
							const errMsg = `接口请求缺少参数：${missingParams.join(',')}`;
							throw new Error(errMsg)

						}
						const url = apiDomain + (conf.action[0] === "/" ? conf.action : '/' + conf.action);
						const promise = axiosInstance.post(url, param);
						promise
							.then(resp => {
								if (resp.headers && resp.headers.passport && window.cacher) {
									// 更新写入最新的passport， 强制刷星user过期时间
									window.cacher.set("passport", resp.headers.passport, 2 * 60 * 60 * 1000);
									window.cacher.set("user", window.cacher.get("user"), 2 * 60 * 60 * 1000);
								}
								if (resp.status === 200) {
									// http请求成功
									if (resp.data.STATUS) {
										// 接口数据请求成功
										resolve(resp.data.result)
									} else {
										// 接口数据请求失败
										if (
											resp.data.INFO === 401 &&
											(resp.data.msg === "另一台设备已登录" ||
												resp.data.msg === "验证已失效")
										) {
											console.log('登录已失效');
											//重新login
											return false

										} else {
											const error = {
												code: resp.data.errorCode || resp.data.INFO || 500,
												message: resp.data.msg || resp.data.message || resp.data.INFO
											}
											reject(error);
										}
									}
								} else {
									reject(resp.statusText)
								}
							})
							.catch(err => {
								reject(err);
							})
					});
				}
			})(conf)
		});
	});
	return httpWrap

}