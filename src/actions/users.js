import * as actionTypes from './types'

export const postUsers = (users) => ({
    type : actionTypes.POST_USERS ,
    payload : {
        users
    }
})