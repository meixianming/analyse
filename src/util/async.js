const async = (promise) => {
	if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
		return new Promise((resolve, reject) => {
			reject(new Error("require promise as the param"))
		}).catch(err => [err, null])
	} else {
		return promise.then(val => [null, val]).catch(err => [err, null])
	}
}
export default async