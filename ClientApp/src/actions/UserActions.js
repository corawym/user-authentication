import * as userProviders from '../providers/userProviders';

export const userActionType = {
    loginRequest: 'LOGIN_REQUEST',
    loginSuccess : 'LOGIN_SUCCESS',
    loginError: 'LOGIN_ERROR',
    logout: 'LOGOUT'
}

export function login(username, password){
    return dispatch => {
        dispatch({type: userActionType.loginRequest});
        // Use default username and password
        if (username === "admin" && password === "123"){
            dispatch({
                type: userActionType.loginSuccess, 
                username: username
            });
        } else {
            dispatch({
                type: userActionType.loginError, 
                error: "Invalid username or password"
            });
        }
        // userProviders.login(username, password)
        //     .then(
        //         user => {
                    // dispatch({
                    //     type: userActionType.loginSuccess, 
                    //     username: username
                    // });
        //         },
        //         error => {
                    // dispatch({
                    //     type: userActionType.loginError, 
                    //     error: "Invalid username or password"
                    // });
        //         }
        //     );
    };
}

export function logout() {
    return dispatch => {
        dispatch({
            type: userActionType.logout
        })
    }
}