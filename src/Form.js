import React from 'react';
import Answer from './Answer'

class Form extends React.Component {

    state={
        L1:'',
        L2:'',
        L3:'',
        L4:'',
        L5:'',
        L6:'',
        W1:'',
        W2:'',
        P:'',
        A:'',
        E:'',
        I:'',
        show:false,
    }

    handleL1 = this.handleL1.bind(this);
    handleL2 = this.handleL2.bind(this);
    handleL3 = this.handleL3.bind(this);
    handleL4 = this.handleL4.bind(this);
    handleL5 = this.handleL5.bind(this);
    handleL6 = this.handleL6.bind(this);
    handleW1 = this.handleW1.bind(this);
    handleW2 = this.handleW2.bind(this);
    handleP = this.handleP.bind(this);
    handleA = this.handleA.bind(this);
    handleE = this.handleE.bind(this);
    handleI = this.handleI.bind(this);
    handleSubmit = this.handleSubmit.bind(this);



    handleSubmit(e) {
       e.preventDefault();
       this.setState({show:true})

    }
    
    handleL1(e) {
        if(e.target.value > 0) {
            this.setState({L1:e.target.value})
        }
        else {
            this.setState({show:false})
        }
    }
    handleL2(e) {
        this.setState({L2:e.target.value})
    }
    handleL3(e) {
        this.setState({L3:e.target.value})
    }
    handleL4(e) {
        this.setState({L4:e.target.value})
    }
    handleL5(e) {
        this.setState({L5:e.target.value})
    }
    handleL6(e) {
        this.setState({L6:e.target.value})
    }
    handleW1(e) {
        this.setState({W1:e.target.value})
    }
    handleW2(e) {
        this.setState({W2:e.target.value})
    }
    handleP(e) {
        this.setState({P:e.target.value})
    }
    handleA(e) {
        this.setState({A:e.target.value})
    }
    handleE(e) {
        this.setState({E:e.target.value})
    }
    handleI(e) {
        this.setState({I:e.target.value})
    }


    render() {

        return(
            <div>
                <form>
                 <label>
                     L1 : 
                     <input type = 'text' value ={this.state.L1} onChange={this.handleL1} />
                 </label>
                 <label>
                     L2 : 
                     <input type = 'text' value ={this.state.L2} onChange={this.handleL2} />
                 </label>
                 <label>
                     L3 : 
                     <input type = 'text' value ={this.state.L3} onChange={this.handleL3} />
                 </label>
                 <label>
                     L4 : 
                     <input type = 'text' value ={this.state.L4} onChange={this.handleL4} />
                 </label>
                 <label>
                     L5 : 
                     <input type = 'text' value ={this.state.L5} onChange={this.handleL5} />
                 </label>
                 <label>
                     L6 : 
                     <input type = 'text' value ={this.state.L6} onChange={this.handleL6} />
                 </label>
                 <label>
                     W1 : 
                     <input type = 'text' value ={this.state.W1} onChange={this.handleW1} />
                 </label>
                 <label>
                     W2 : 
                     <input type = 'text' value ={this.state.W2} onChange={this.handleW2} />
                 </label>
                 <label>
                     P : 
                     <input type = 'text' value ={this.state.P} onChange={this.handleP} />
                 </label>
                 <label>
                     A : 
                     <input type = 'text' value ={this.state.A} onChange={this.handleA} />
                 </label>
                 <label>
                     E : 
                     <input type = 'text' value ={this.state.E} onChange={this.handleE} />
                 </label>
                 <label>
                     I : 
                     <input type = 'text' value ={this.state.I} onChange={this.handleI} />
                 </label>
                 <input type ='submit' value = "Get Answer" />
                </form>
                {this.state.show ? <Answer/>: null}
            </div>
        )
    }
}
export default Form;