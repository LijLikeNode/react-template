import React ,{ Component } from 'react';
import { observer } from "mobx-react";

@observer
class List extends Component {

    render(){
        const { list,deleteItem } = this.props;
        return (
            <ul>
                {list.map((item,index)=><li key={index} onClick={()=>{
                    deleteItem(item);
                }}>{item}</li>)}
            </ul>
        )
    }
}

export default List;