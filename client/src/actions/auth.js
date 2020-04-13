import axios from 'axios';
import {ToastsContainer, ToastsStore} from 'react-toasts';



//Register User

export const registerHandler = ({ name, email, university, rollnumber, cnic,password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, university, rollnumber, cnic,password});
    try {

        const res = await axios.post('/api/users', body, config);
      
        dispatch ({
            type: "REGISTER_SUCCESS",
            payload: res.data
        })
        ToastsStore.success("User Registered Succefully!")

    } catch (err) {
        ToastsStore.error("User Registered Failed!")
        dispatch({
            type: "REGISTER_FAIL"
        })
    }
}



export const loadUsers = () => async dispatch => {
try {
    const res = await axios.get('/api/users/getusers');
    dispatch({
        type:"LOAD_USERS",
        payload:res.data
    })

} catch (error) {
    console.log(error.message)
}
}