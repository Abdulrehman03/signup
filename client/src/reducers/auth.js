

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    allUsers: [],

}

export default function (state = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case "REGISTER_SUCCESS":
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case "REGISTER_FAIL":
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                loading: true,
                token: null
            }
        case "LOAD_USERS":
            return {
                ...state,
                allUsers: payload
            }
        default:
            return state

    }


}