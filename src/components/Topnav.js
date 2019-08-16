import React, {Component} from 'react';

class Topnav extends Component{
    render(){
        return(
            <div className="topnav">
                <a className="Home" href="/" onClick={
                    function(e){
                    e.preventDefault();
                    this.props.onChangeMode('home');
                     }.bind(this)}
                >
                Home
                </a>
                <a  className="inforamtionButton"
                    href='/'
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('information');
                    }.bind(this)}
                    >
                    이용방법
                </a>
                <a  className="paymentButton"
                    href='/'
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('payment');
                    }.bind(this)}
                >
                    결제하기
                </a>
            </div>
       )
    }
}

export default Topnav;
