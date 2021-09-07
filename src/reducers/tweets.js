import * as actionTypes  from '../actions/types'
 
export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.POST_TWEETS:
            return {
                ...state ,
                ...action.payload.tweets
            }
        case actionTypes.TOGGLE_TWEET:
            return {
                ...state ,
                [action.payload.id] : {
                    ...state[action.payload.id] ,
                    likes: action.payload.hasLiked === true 
                    ? state[action.payload.id].likes.filter( (id) => id !== action.payload.authUser)
                    : state[action.payload.id].likes.concat( [action.payload.authUser] )
                }
            }
        case actionTypes.SAVE_NEW_TWEET: 
            let { tweet } = action.payload

            let replies = {}
            if( tweet.replyingTo !== null ) {
                replies = {
                    [tweet.replyingTo] : {
                        ...state[tweet.replyingTo] ,
                        replies : state[tweet.replyingTo].replies.concat( [tweet.id] )
                    }
                }
            }

            return {
                ...state ,
                [tweet.id] : tweet ,
                ...replies
            }
        default:
            return state
    }
}