import React from 'react';

export default class AdressDetail extends React.Component{
    render() {
        const detail = (<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
            </div>)

        const blank = (<div></div>)

        return(
            
        <div>
            <h1>{this.props.contact.name}</h1>
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