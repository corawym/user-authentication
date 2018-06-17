import * as homeProviders from '../providers/homeProviders';

export const homeActionType = {
    homeBegin: 'HOME_BEGIN',
    homeSuccess : 'HOME_SUCCESS',
    homeError: 'HOME_ERROR',
}

export function setHomeForm(homeFormValue){
    return dispatch => {
        dispatch({type: homeActionType.homeBegin});

        homeProviders.homeForm(homeFormValue)
            .then(
                result => {
                    dispatch({
                        type: homeActionType.homeSuccess, 
                        homeFormValue: result
                    });
                },
                error => {
                    console.log(error);
                    dispatch({
                        type: homeActionType.homeError, 
                        error: "Invalid value"
                    });
                }
            );

    };
}
