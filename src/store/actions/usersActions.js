
import {GET_USERS, USERS_ERROR, GET_FULL, FULL_ERROR} from '../types'
import axios from 'axios'

export const getUsers = (test,page) => async dispatch => {
    try{
        const res = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${test}&page=${page}`)
        const dataa = []
        const pages =res.data.totalResults/10
        for (let i=1 ; i <= pages ;i++){
            let response = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${test}&page=${i}`)
            dataa.push(response.data)
        }
        dispatch( {
            type: GET_USERS,
            payload: dataa
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getFull = (test) => async dispatch => {
    try{
        const res = await axios.get(`http://www.omdbapi.com/?i=${test}&plot=full&apikey=faf7e5bb`)
        dispatch( {
            type: GET_FULL,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: FULL_ERROR,
            payload: console.log(e),
        })
    }

}