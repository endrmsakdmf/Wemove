import React, {Component} from 'react';
import './Buttom.css';

class Buttom extends Component{
    render(){
        return(
            <div className = "buttom">
                대학생의 불편함을 없애고 싶은 WEMOVE
                TEL : 010-3525-0647
                E-mail : aviachch@gmail.com
                <a href="/" onClick={
                  function(e){
                  e.preventDefault();
                  this.props.onChangeMode("payment");
                  }.bind(this)}
                >
                  <br></br>
                    신청하기
                </a>
            </div>
        )
    }
}


export default Buttom;
