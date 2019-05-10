import React from 'react';

export default class AdressDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isUpdate : false,
            name : '',
            phone : ''
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    }
    render() {
        const detail = (<div>
            <h1>{this.props.contact.name}</h1>
            <p>{this.props.contact.phone}</p>
            </div>)

        const view = this.state.isUpdate ? (<div></div>) : detail; 

        const blank = (<div></div>)

        return(
        <div>
            {this.props.isSelected ? view : blank}
            <button onClick={this.props.onDelete}>삭제</button>
            <button onClick={this.handleToggle}>수정</button>
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