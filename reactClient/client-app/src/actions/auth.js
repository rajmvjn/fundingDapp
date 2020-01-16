import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

export const authenticate = ({ email, password }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });
    let res = {};

    try {
        res = await axios.post( 'http://localhost:4000/api/admin', body, config );
        console.log(res.data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: res.data
        })
    }    
}
