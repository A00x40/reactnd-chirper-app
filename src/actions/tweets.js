import * as actionTypes from './types'

export const postTweets = (tweets) => ({
    type : actionTypes.POST_TWEETS ,
    payload : {
        tweets
    }
})

export const getTweets = () => ({
    type : actionTypes.GET_TWEETS 
})

