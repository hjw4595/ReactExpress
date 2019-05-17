import {combineReducers} from 'redux';
import counter from './Counter';
import ui from './Ui';

const reducers = combineReducers({
    counter , ui
});

export default reducers;