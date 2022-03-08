import React,{Component} from 'react';
import './AddSubscriber.css';
import Header from './Header';

class AddSubscriber extends Component {

    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }
    inputChangeHandler =(e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    
    render(){
        return(
            <div>
                
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                   <button className='custom-btn'>Back</button> 
                  </div>
                 <form className="subscriber-form">
                 <label htmlFor="name" className='label-control'>Name : </label><br/>
                        <input id="name" type="text" className='input-control' name="name" onChange={this.inputChangeHandler} ></input><br/><br/>
                        <label htmlFor="phone" className='label-control'>Phone : </label><br/>
                        <input id="phone" type="text" className='input-control' name="phone" onChangeHandler={this.inputChangeHandler} ></input><br/><br/>
                        <div className='subscriber-info-container'>
                        <span className='subscriber-to-add-heading'>Subscriber to be added : </span><br/> 
                        <span className='subscriber-info'>Name:{this.state.name}</span><br/>
                        <span className='subscriber-info'>Phone:{this.state.phone}</span>
        </div>
        <button className='custm-btn add-btn'>Add</button>
            </form>
            </div>
        )
    
    }
}
export default AddSubscriber;