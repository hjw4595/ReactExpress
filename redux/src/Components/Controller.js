
    import React, { Component} from 'react';
    import PropTypes from 'prop-types'
    
    const propTypes = { 
        onPlus: PropTypes.func,
        onRandomColor: PropTypes.func
    };

    const defaultProps = { };

    class Controller extends Component { 

        render() {
            return(
                <div>
                    <button>+</button>
                    <button>-</button>
                    <button>random backgroundcolor</button>
                </div>
            )
        }
    }

    Controller.propTypes = propTypes;
    Controller.defaultProps = defaultProps
    export default Controller;
