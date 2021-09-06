import * as actionTypes  from '../actions/types'
 
export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.POST_USERS:
            return {
                ...state ,
                ...action.payload.users
            }
        default:
            return state
    }
}