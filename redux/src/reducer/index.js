import {combinReducers} from 'redux';
import counter from './Counter';
import ui from './Ui';

const reducers = combinReducers({
    counter , ui
});

export default reducers;