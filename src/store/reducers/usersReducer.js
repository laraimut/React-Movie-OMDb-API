/* eslint-disable import/no-anonymous-default-export */
import {GET_USERS,GET_FULL} from '../types'

const initialState = {
    users:[],
    moviedetail:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        case GET_FULL:
            return {
                ...state,
                moviedetail:action.payload,
                loading:false

            }


            default: return state
    }

}