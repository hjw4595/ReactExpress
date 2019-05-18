
    import React, { Component} from 'react';
    import PropTypes from 'prop-types'
    
    const propTypes = { 
        onPlus: PropTypes.func,
        onSubtract : PropTypes.func,
        onRandomColor: PropTypes.func
    };
    function creatWarning(funcName){
        return () => console.log(funcName + 'is not defind')
    }

    const defaultProps = {
        onPlus: creatWarning('onPlus'),
        onSubtract :creatWarning('onSubtract'),
        onRandomColor:creatWarning('onRandomColor')
     };

    class Controller extends Component { 

        render() {
            return(
                <div>
                    <button onClick={this.props.onPlus}>+</button>
                    <button onClick={this.props.onSubtract}>-</button>
                    <button onClick={this.props.onRandomColor}>random backgroundcolor</button>
                </div>
            )
        }
    }

    Controller.propTypes = propTypes;
    Controller.defaultProps = defaultProps
    export default Controller;
