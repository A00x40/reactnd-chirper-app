import * as actionTypes from './types'

export const setAuthUser = (id) => ({
    type : actionTypes.SET_AUTH_USER , 
    payload : {
        id
    }
})


