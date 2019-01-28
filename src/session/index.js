(win => {
	window.cacher = {
		get: (key) => {
			const obj = JSON.parse(localStorage.getItem(key));
			if (obj.expires && obj.expires < new Date().getTime()) {
				// 如果数据已过期
				this.remove(key);
				throw new Error(`${key}值数据已过期`);
			}
			return obj.val;
		},
		set: (key, val, expires) => {
			let obj = {
				val: val
			}
			if (expires) {
				// 如果有设置过期日期
				const now = new Date().getTime();
				const time = now + expires;
				obj = Object.assign({}, obj, {
					expires: time
				})
			}
			localStorage.setItem(key, JSON.stringify(obj));
		},
		remove: (key) => {
			localStorage.removeItem(key)
		},
		clear: () => {
			localStorage.clear();
		}
	}
})(window)