import React from 'react';

export default class AdressDetail extends React.Component{
    render() {
        const detail = (<div>
            <h1>{this.props.contact.name}</h1>
            <p>{this.props.contact.phone}</p>
            </div>)

        const blank = (<div></div>)

        return(
        <div>
            {this.props.isSelected ? detail : blank}
        </div>
    )
    }
}
AdressDetail.defaultProps = {
    contact : {
        contact :{
            name : '',
            phone : ''
        }
    }
}