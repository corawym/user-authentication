import { homeActionType } from '../../actions/HomeActions';

const initialState = {
  data: null,
  error: null,
  isLoading: false
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case homeActionType.homeBegin:
        return {
          ...state,
          isLoading: true,
          data: null
        }
      case homeActionType.homeSuccess:
        return {
          ...state,
          isLoading: false,
          data: action.homeFormValue
        };
      case homeActionType.homeError:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default:
        return state;
    }
  };
  