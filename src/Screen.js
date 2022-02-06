import React, {Component} from 'react';

class Screen extends Component{

  
    render = () =>
       <div className="screener">


           <input type="text" value={this.props.val}/>
       </div>


}


export default Screen;