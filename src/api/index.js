import activity from './activity'
import study from './study'
import account from "./account"
import {
	createAPI
} from './create.js'

export const httpWrap = createAPI(activity, study, account)