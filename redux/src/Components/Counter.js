
import React, { Component } from 'react';
import Controller from './Controller';
import Value from './Value';
import { connect } from 'react-redux';

import * as actions from '../actions';


        const propTypes = { };
    
        const defaultProps = { };

        class Counter extends Component { 

            render() {
                return(
                    <div>
                        <Value number = {this.props.number}/>
                        <Controller/>
                    </div>
                )
            }
        }

        Counter.propTypes = propTypes;
        Counter.defaultProps = defaultProps

        const mapStateToProps = (state) => {
            return {
                number : state.counter.number,
                color : state.ui.color
            }
        }

        const mapDispatchToProps = (dispatch) => {
            return {
                handleIncrement : () => {dispatch (actions.increment)},
                handleDecrement : () => {dispatch (actions.decrement)},
                handleSetColor : (color) => {dispatch (actions.setColor(color))}
            }
        }


        export default connect(mapStateToProps, mapDispatchToProps) (Counter);
    