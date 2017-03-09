import * as types from './actionTypes';
import tagsApi from '../api/tagsApi';

export function loadTagsSuccess(tags) {
    return {type: types.LOAD_TAGS_SUCCESS, tags};
}

export function loadTags() {
    return function(dispatch) {
        return tagsApi.getAllTags().then(tags => {
            dispatch(loadTagsSuccess(tags));
        }).catch(error => {
            throw(error);
        });
    };
}