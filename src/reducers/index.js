import { combineReducers } from 'redux'

import tweets from '../reducers/tweets'
import users from '../reducers/users'
import authUser from '../reducers/authUser'

export default combineReducers({
    tweets ,
    users ,
    authUser
})