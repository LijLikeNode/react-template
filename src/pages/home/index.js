import React,{ Component,Fragment } from 'react';
import List from './list';
// 引入观察者
import { observer, inject } from "mobx-react";
// import { observable } from "mobx";



@inject("home")
@observer
class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    handleChange = e => {
        this.props.home.resize(e.target.value);
    }

    handleClick = () =>{
        this.props.home.addItem();
    }
    deleteItem = item =>{
        this.props.home.deleteItem(item);
    }

    render() {

        const { value,list } = this.props.home;

        return (
            <Fragment>
                <input 
                    value={value} 
                    type="text" 
                    placeholder="Add Items"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>add</button>
                <List list={list} deleteItem={this.deleteItem}></List>
            </Fragment>
        )
    }
}


export default Home;