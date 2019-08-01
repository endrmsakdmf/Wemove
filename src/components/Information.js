import React, {Component} from 'react';

class Information extends Component{
    render(){
        return(
            <div className = "information">
                <a
                    href='/' 
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                    }.bind(this)} 
                    >
                    이용방법
                </a>
            </div>            
       )
    }
}

export default Information;