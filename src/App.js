import React, {Component} from 'react';
import Screen from './Screen';

import ButtonPad from './ButtonPad';


let extraStore;
let currentSign;

class App extends Component{


    constructor(props){


      super(props);
      this.state = {


          screenVal: ''
      }
    }

    addNumber = (val) => {


      this.setState({screenVal: this.state.screenVal + val})
    }

    delNumber = () => {


      this.setState({screenVal: this.state.screenVal.slice(0, this.state.screenVal.length-1)})
    }

    resetScreen = () => {

      this.setState({screenVal: ''});

    }

    operate = () => {


      if(currentSign === '+'){

          this.setState({screenVal: String(Number(extraStore) + Number(this.state.screenVal))})
      }

      else if(currentSign === '-'){


        this.setState({screenVal: String(Number(extraStore) - Number(this.state.screenVal))})
      }

      else if(currentSign === '/'){


        this.setState({screenVal: String(Number(extraStore) / Number(this.state.screenVal))})
      }

      else if(currentSign === '*'){


        this.setState({screenVal: String(Number(extraStore) * Number(this.state.screenVal))})
      }
    
    }

    adder = () => {

      extraStore = this.state.screenVal;
      currentSign = '+'
      this.setState({screenVal: ''});

    }

    minuser = () => {


      extraStore = this.state.screenVal;
      currentSign = '-'
      this.setState({screenVal: ''});
    }

    divider = () => {

      extraStore = this.state.screenVal;
      currentSign = '/'
      this.setState({screenVal: ''});
      
    }

    multiplier = () => {

      extraStore = this.state.screenVal;
      currentSign = '*'
      this.setState({screenVal: ''});

      
    }


    

    


    render = () => 
      <div className="wrapper">

       <Screen val={this.state.screenVal}/>
       <ButtonPad addNumber={this.addNumber} delNumber={this.delNumber} resetScreen={this.resetScreen}
        operate={this.operate} adder={this.adder} minuser={this.minuser} divider={this.divider}
        multiplier={this.multiplier}
       
       />
         
      </div>

}

export default App;