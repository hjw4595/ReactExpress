
import React, { Component } from 'react';
import Controller from './Controller';
import Value from './Value';
    
        const propTypes = { };
    
        const defaultProps = { };

        class Counter extends Component { 

            render() {
                return(
                    <div>
                        <Value />
                        <Controller/>
                    </div>
                )
            }
        }

        Counter.propTypes = propTypes;
        Counter.defaultProps = defaultProps
        export default Counter;
    