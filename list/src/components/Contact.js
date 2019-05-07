import React from 'react';
import AdressList from './AdressList';
import AdressDetails from './AdressDetails';

export default class Contact extends React.Component{
    
    constructor(props) { // 새로고침하지않으면 새로 생성되지않음
        super(props);
        this.state = {
            keyword : '',
            selectedKey: -1,
            contactData: [{
                name: '1',
                phone: '010-0000-0001'
            }, {
                name: '2',
                phone: '010-0000-0002'
            }, {
                name: '3',
                phone: '010-0000-0003'
            }, {
                name: '4',
                phone: '010-0000-0004'
            }]
        };
        //임의의 메소드를 만들떄 바인딩
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        this.setState({
            keyword: e.target.value
        })
    }
    handleClick (key){
        this.setState({
            selectedKey : key
        });
    }
    
    //sort 배열자체를 바꿈 
    //filter 새로운 배열 
    render() {
        const mapToComponents = (data) => { 
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase() //소문자로 검색가능 
                        .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<AdressList 
                    contact={contact}
                    key={i}
                    onClick={() => this.handleClick(i)}/>);
            });
        };
        
        return (
            <div>
                <h1>주소록</h1>
                <input 
                name="keyword" 
                placeholder="검색"
                value={this.state.keyword} 
                onChange={this.handleChange}/>

                <div>{mapToComponents(this.state.contactData)}</div>
                <AdressDetails 
                isSelected = {this.props.selectedKey !== -1}
                contact = {this.state.contactData[this.state.selectedKey]}/>
            </div>
        );
    }
}
