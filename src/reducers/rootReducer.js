import {combineReducers} from 'redux';
import locations from './locationReducer';
import tags from './tagReducer';

const rootReducer = combineReducers({
    locations,
    tags
});

export default rootReducer;