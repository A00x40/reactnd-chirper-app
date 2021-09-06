import * as actionTypes from './types'
import { saveLikeToggle } from '../utils/api'
export const postTweets = (tweets) => ({
    type : actionTypes.POST_TWEETS ,
    payload : {
        tweets
    }
})

export const toggleTweet = ({id, authUser, hasLiked}) => ({
    type : actionTypes.TOGGLE_TWEET ,
    payload : {
        id , 
        authUser , 
        hasLiked
    }
})

export const handleToggleTweet = (info) => {
    return async (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info)
            .catch(e => {
                console.warn(e)        
                dispatch(toggleTweet(info))
            })
        
    }
}


