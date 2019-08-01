import React, {Component} from 'react';
import Information from './Information';
import Home from './Home';

class Top extends Component{
    render(){
        return(
          <div>
          <Home
            onChangePage = {function(){
             this.setState({mode:'home'});
            }.bind(this)}  
          >

          </Home>

          <Information
            onChangePage = {function(){
              this.setState({mode:'information'});
              }.bind(this)}
          >

          </Information>
          </div>
        )
    }
}

export default Top;