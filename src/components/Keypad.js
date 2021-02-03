// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {

    handlekey = () => {
        console.log('Entering password...')
    } 
    
    render(){
        return(
            <input onKeyUp={this.handlekey} type="password" />
        )
    }
}