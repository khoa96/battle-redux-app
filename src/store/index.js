import { createStore } from 'redux';
import rootReducer from '../reducer/index';

const rootStore = createStore(rootReducer);
export default rootStore;