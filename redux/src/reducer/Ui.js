import * as types from '../actions/ActionTypes';

const initalState = { 
    color : [0,0,0]
};

export default function Ui(state = initalState, action){
    if(action.type === types.SET_COLOR){
        return {
            color: action.color
        };
    }else{
        return state;
    }
}