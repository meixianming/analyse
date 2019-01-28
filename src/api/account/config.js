export default [{
	// desp: "用户登录",
	outKey: "doSignIn",
	action: "/login/doLogin.do",
	reqParams: [
		"userPhonenumber",
		"userPsd",
		{
			name: "loginType",
			default: 2
		}
	]
}]