import { userActionType } from '../../actions/UserActions';

const initialState = {
  username: "",
  isAuth: false,
  error: null,
  isLoggingIn: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.loginRequest:
      return {
        ...state,
        isLoggingIn: true
      }
    case userActionType.loginSuccess:
      return {
        ...state,
        isAuth: true,
        username: action.username,
        isLoggingIn: false,
        error: initialState.error,
      };
    case userActionType.loginError:
      return {
        ...state,
        error: action.error,
        isLoggingIn: false
      }
    case userActionType.logout:
      return {
        ...state,
        isAuth: false,
        username: initialState.username,
        isLoggingIn: false
      }
    default:
      return state;
  }
};
