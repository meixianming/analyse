(win => {
	window.cacher = {
		get: (key) => {
			return localStorage.getItem(key)
		},
		set: (key, val, Expires) => {
			localStorage.setItem(key, val);
		},
		remove: (key) => {
			localStorage.removeItem(key)
		},
		clear: () => {
			localStorage.clear();
		}
	}
})(window)