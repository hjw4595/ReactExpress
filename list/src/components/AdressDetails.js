import React from 'react';

export default class AdressDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isUpdate : false,
            name : '',
            phone : ''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate() {
        this.props.onUpdate(this.state.name, this.state.phone)
    }

    handleChange(e) {
        let fixState = {};
        fixState[e.target.name] = e.target.value;
        this.setState(fixState)
    }

    handleToggle(){
        if(!this.state.isUpdate){
            this.setState({
                name: this.props.contact.name,
                phone : this.props.contact.phone
            });
        }else {
            this.handleUpdate();
        }
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    }
    render() {
        const detail = (<div>
            <h1>{this.props.contact.name}</h1>
            <p>{this.props.contact.phone}</p>
            <button>asd</button>
            </div>)

        const update = (
            <div>
            <p>
            <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="phone"
                value={this.state.phone}
                onChange={this.handleChange}
            />
        </p>
        </div>
        )
        const view = this.state.isUpdate ? update : detail; 
        const blank = (<div></div>)

        return(
        <div>
            {this.props.isSelected ? view : blank}        
            <button onClick={this.props.onDelete}>삭제</button>
            <button onClick={this.handleToggle}>{this.state.isUpdate ? '확인' : '수정' }</button>
        </div>
    )
    }
}
AdressDetail.defaultProps = {
    contact : {
        contact :{
            name : '',
            phone : ''
        },
        onUpdate: () => {console.error('에러')}
    }
}