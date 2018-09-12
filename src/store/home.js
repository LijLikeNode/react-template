import { observable, action, configure, reaction } from "mobx";
import ax from '../api';
// configure({ enforceActions : true });
class Home {
  @observable value = 'lalal';
  @observable list = ['Dell','Lee','Mobx'];

  @action.bound resize(val) {
    this.value = val;
  }

  @action.bound addItem(){
    this.list.push(this.value);
    this.value = '';
  }

  @action.bound deleteItem(item){
    this.list.remove(item);
  }

  @action.bound initList(){
    // console.log(get)
    ax('/list','',true).then(res=>{
      console.log(res);
    }).catch(e=>console.log(e))
  }
  
  constructor(){
    reaction(() => this.value, data => { console.log(data) })
  }
  
}



export default Home;