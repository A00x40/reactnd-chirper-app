import { getInitialData } from '../utils/api'

import * as tweetsActions from '../actions/tweets'
import * as userActions   from '../actions/users'
import { setAuthUser }    from '../actions/authUser'

const AUTH_ID = "tylermcginnis"

export const handleInitialData = () => {
    return async (dispatch) => {
        const { tweets, users } = await getInitialData()
        dispatch(tweetsActions.postTweets(tweets))
        dispatch(userActions.postUsers(users))
        dispatch(setAuthUser(AUTH_ID))
    }
}