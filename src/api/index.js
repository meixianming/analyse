import activity from './activity'
import study from './study'
import {
	createAPI
} from './create.js'

export const httpWrap = createAPI(activity, study)