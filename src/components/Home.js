import React, {Component} from 'react';
import wemovelogo from './wemove_logo.svg';


class Home extends Component {
    render(){
        return(
                <a href="/" onClick={
                    function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                     }.bind(this)// reservation 모드로 상태 설정되면 예약창 불러와야함
                     }
                >
                <img src={wemovelogo} className = "App-logo" alt= "logo"/>
                </a>
        )
    }
}

export default Home;