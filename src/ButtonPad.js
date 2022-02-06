import React, {Component} from 'react';
import Button from './Button';


class ButtonPad extends Component{


    render = () =>
       <div className="pad">

           <Button work={() => this.props.addNumber(7)}>7</Button>
           <Button work={() => this.props.addNumber(8)}>8</Button>
           <Button work={() => this.props.addNumber(9)}>9</Button>
           <Button work={this.props.delNumber}>del</Button>
           <Button work={() => this.props.addNumber(4)}>4</Button>
           <Button work={() => this.props.addNumber(5)}>5</Button>
           <Button work={() => this.props.addNumber(6)}>6</Button>
           <Button work={this.props.adder}>+</Button>
           <Button work={() => this.props.addNumber(1)}>1</Button>
           <Button work={() => this.props.addNumber(2)}>2</Button>
           <Button work={() => this.props.addNumber(3)}>3</Button>
           <Button work={this.props.minuser}>-</Button>
           <Button work={() => this.props.addNumber('.')}>.</Button>
           <Button work={() => this.props.addNumber(0)}>0</Button>
           <Button work={this.props.divider}>/</Button>
           <Button work={this.props.multiplier}>x</Button>
           <Button entry="reset" work={this.props.resetScreen}>Reset</Button>
           <Button entry="equalto" work={this.props.operate}>=</Button>


           
       </div>

}


export default ButtonPad;