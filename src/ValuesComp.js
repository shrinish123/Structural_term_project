import React from 'react';
import './App.css';
import Answer from './Answer'
import Form from './Form';

class ValuesComp extends React.Component {
    state ={
        default: true,
    }

    handleNo = (e) => {
        e.preventDefault();
        this.setState({default:true});
     }

     handleYes =(e) => {
         e.preventDefault();
         this.setState({default:false});
     }


   render () {


    return <div>
            <div>
             <div>The default values used for solving the problem are as follows:</div>
             <div>L1 = 4.0m L2 = 2.0 L3 = 2.0 L4 =3.0 L5 = 3.0 L6 = 3.0 </div>
             <div>W1 = 20.0 x 1000 W2 = 10.0 x 1000</div>
             <div>P = 30.0 x  1000 </div>
             <div>A = 500.0 x 10<sup>-6</sup></div>
             <div>E = 200.0 x 10<sup>9</sup></div>
             <div>I = 175.0 x 10<sup>-6</sup></div>
            </div>
       <div>Do you want to change the values ?</div>
       <button onClick={this.handleYes}>Yes</button>
       <button onClick={this.handleNo}>No, Find with default values</button>
       {this.state.default ? <Answer l1={23}/>: <Form/>}
      </div>
   }
    
}

export default ValuesComp;