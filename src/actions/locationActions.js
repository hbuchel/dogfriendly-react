import * as types from './actionTypes';
import locationApi from '../api/locationApi';

export function loadLocations() {
    return function(dispatch) {
        return locationApi.getAllLocations().then(locations => {
            dispatch(loadLocationsSuccess(locations));
        }).catch(error => {
            throw(error); 
        });
    };
}

export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}