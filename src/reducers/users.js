import * as actionTypes  from '../actions/types'
 
export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state ,
                ...action.payload.users
            }
        default:
            return state
    }
}