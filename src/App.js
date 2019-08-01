import React, {Component} from 'react';
import './App.css';
import Buttom from "./components/Buttom"
import Home from "./components/Home"
import Information from "./components/Information"
import Content from "./components/Content"
import HomeContent from "./components/HomeContent"
import InformationContent from "./components/InformationContent"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'home',// home 모드 : 기본화면
      home:{desc: <HomeContent></HomeContent>},
      information:{desc: <InformationContent></InformationContent>},
    }
  }
  render(){
    var _desc = null;
    if(this.state.mode === 'home'){
      _desc = this.state.home.desc;
    }
    else if(this.state.mode ==='information'){
      _desc = this.state.information.desc;
    }

    return(
      <div className = "App">
      
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

        <Content desc={_desc}></Content>

        <Buttom></Buttom>
        
      </div>
    )
  }
}

export default App;
