import * as actionTypes  from '../actions/types'
 
export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_TWEETS:
            return {
                ...state ,
                ...action.payload.tweets
            }
        default:
            return state
    }
}