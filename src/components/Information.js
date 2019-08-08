import React, {Component} from 'react';
import wemovelogo from './wemove_logo.svg';

class Information extends Component{
    render(){
        return(
            <div className="topnav">
                <a className="Home" href="/" onClick={
                    function(e){
                    e.preventDefault();
                    this.props.onChangePageHome();
                     }.bind(this)// reservation 모드로 상태 설정되면 예약창 불러와야함
                     }
                >
                <img src={wemovelogo} className = "App-logo" />
                </a>
                <a  className="inforamtionButton"
                    href='/'
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                    }.bind(this)}
                    >
                    이용방법
                </a>이용방법 보는 버튼
                <a  className="paymentButton"
                    href='/'
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePageToPayment();
                    }.bind(this)}
                >
                    결제하기
                </a>결제하기 버튼
            </div>
       )
    }
}

export default Information;
