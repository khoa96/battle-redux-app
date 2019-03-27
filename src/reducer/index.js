import {combineReducers} from 'redux';
import popularReducer from '../reducer/popularReducer';
import playerReducer from '../reducer/playerReducer';

const rootReducer = combineReducers({
    popularReducer,
    playerReducer
})
export default rootReducer;