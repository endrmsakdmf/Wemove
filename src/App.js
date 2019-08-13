import React, {Component} from 'react';
import './App.scss';
import Buttom from "./components/Buttom"
import Topnav from "./components/Topnav"
import Content from "./components/Content"
import HomeContent from "./components/HomeContent"
import InformationContent from "./components/InformationContent"
import PaymentContent from "./components/PaymentContent"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'home',// home 모드 : 기본화면
      home:{desc: <HomeContent
                    onChangeMode = {function(_mode){
                      this.setState({mode:_mode});
                    }.bind(this)}
                  ></HomeContent>},
      information:{desc: <InformationContent></InformationContent>},
      payment:{desc : <PaymentContent></PaymentContent>}
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

        <Topnav
          onChangeMode = {function(_mode){
            this.setState({mode:_mode});
          }.bind(this)}
        >

        </Topnav>

        <Content desc={_desc}></Content>

        <Buttom></Buttom>

      </div>
    )
  }
}

export default App;
