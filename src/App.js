import React,{Component}from 'react';
import AddSubscriber from './AddSubscriber';
import './App.css';
import Header from './Header';


   class App extends Component {
     constructor(){
       super();
       this.state={
       subscribersListToShow:[]
     }
     }
     render(){
//      let subscribers=[
//        {id:1,
//         name:'samyuktha',
//         phone:'9199442131'
//        },
// {id:2,
//   name:'sahithi',
//   phone:'9912176590'
// },
// {
//   id:3,
//   name:'karthik',
//   phone:'8341081998'
// }
//      ]

    
     return(
       <div>
         <Header heading="Phone Directory "/>
         <div className='component-body-container'>
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
    </div>
        {
          this.state.subscribersListToShow.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className='grid-item'>{sub.name}</span>
              <span className='grid-item'>{sub.phone}</span>
              <span className='grid-item'><button className='custom-btn delete-btn'>Delete</button></span>

              </div>
          })
        }   
     </div>
     );
     }

    }
export default App;