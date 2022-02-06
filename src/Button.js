import React, {Component} from 'react';

class Button extends Component{

   

    render = () => 
      <button onClick={this.props.work} className={this.props.entry}>

        {this.props.children}

      </button>


}

export default Button;