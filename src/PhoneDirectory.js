import React,{Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscriberList:[
                {
                    id:1,
                    name:'samyuktha',
                    phone:'9900116754'
                },
                {
                    id:2,
                    name:'Sambhav',
                    phone:'6307658900'
                }
            ]
        }
    }
    addSubscriberHandler =(newSubscriber) =>{
        let subscriberList=this.state.subscriberList;
        console.log(this.state.subscriberList)
        if(subscriberList.length>0){
            newSubscriber.id= subscriberList[subscriberList.length-1].id +1;
        }else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log(this.state.subscriberList);
    }
    render(){
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
           // <ShowSubscriber subscriberList={this.state.subscriberList}/>
           <BrowserRouter>
           <Routes>
               <Route exact path="/" element={<ShowSubscriber subscriberList={this.state.subscriberList}/>}/>
               <Route exact path="/add" element={<AddSubscriber addSubscriber={this.addSubscriberHandler}/>}/>
             </Routes>
           </BrowserRouter>
        )
    }
}
export default PhoneDirectory;