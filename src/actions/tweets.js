import * as actionTypes from './types'
import { showLoading, hideLoading } from 'react-redux-loading'

import { saveLikeToggle , saveTweet } from '../utils/api'
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

export const saveNewTweet = (tweet) => ({
    type : actionTypes.SAVE_NEW_TWEET ,
    payload : {
        tweet
    }
})

export const handleSaveNewTweet = (text, replingTo) => {
    return async (dispatch, getState) => {
        const { authUser } = getState()
        dispatch(showLoading())
        return saveTweet({
            text ,
            author: authUser ,
            replingTo
        }).then( tweet => {
            dispatch(saveNewTweet(tweet))
        .then( () => {
            dispatch(hideLoading())
        })
        }).catch(e => {
                console.warn(e)        
        })
        
    }
}
