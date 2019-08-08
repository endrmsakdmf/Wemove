import React, {Component} from 'react';

class Content extends Component{
    render(){
        return(
            <article className="content">
                {this.props.desc}
            </article>
        )
    }
}

export default Content;
