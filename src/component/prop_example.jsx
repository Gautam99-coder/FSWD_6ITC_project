import React, { Component } from 'react';
import "./proptest.css";
class PropExample extends Component{
    render(){
        return(
            <>
            <div className='user-card'>
                <img src="{this.props.img_url}"/>
                <button className='save-button'>{this.props.button_txt}</button>
                <h3 className='user-name'>{this.props.data}</h3>
            </div>
            </>
        )
    }
}
export default PropExample;