import axios from 'axios'

axios.defaults.baseURL = `${window.location.protocol}//whrdd.f3322.net:8889`
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.common['reqClient'] = 'dj-web'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true // 跨域时是否需要凭据

const axiosInstance = axios.create()

// 动态创建api请求接口
// this.$http.activity.getApi({}).then

// export const createAPI = (...apiMapData) => {
//   debugger
//   apiMapData.forEach(mapItem => {
//     const apiModule = {}
//     mapItem.config.forEach(conf => {
//       apiMapData[conf.outkey] = () => {
//         console.log(conf.action)
//       }
//     })
//   })
// }
