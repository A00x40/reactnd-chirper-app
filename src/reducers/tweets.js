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
        default:
            return state
    }
}