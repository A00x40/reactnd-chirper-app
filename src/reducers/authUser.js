import * as actionTypes  from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_USER:
            return action.payload.id
        default:
            return state
    }
}