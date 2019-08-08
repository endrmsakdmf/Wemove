import React, {Component} from 'react';
import './App.css';
import Buttom from "./components/Buttom"
import Information from "./components/Information"
import Content from "./components/Content"
import HomeContent from "./components/HomeContent"
import InformationContent from "./components/InformationContent"
import PaymentContent from "./components/PaymentContent"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'home',// home 모드 : 기본화면
      home:{desc: <HomeContent></HomeContent>},
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

        <Information
          onChangePageHome = {function(){
            this.setState({mode:'home'});
          }.bind(this)}
          onChangePage = {function(){
            this.setState({mode:'information'});
            }.bind(this)}
          onChangePageToPayment = {function(){
            this.setState({mode:'payment'});
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
