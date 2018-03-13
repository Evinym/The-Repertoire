import React, { Component } from 'react';

class FUNCTIONDEBAZ extends Component {

    state={
        backgroundColor:"red",
        backgroundColor2:"black",
        width:"200px",
        height:"200px"
      }
      
      changeTop = () => {
        this.setState({
          backgroundColor: "purple",
          width:"500px",
          height:"500px"    
        })
      }
      
      changeColor = () => {
        this.setState({
          backgroundColor2: "yellow"
        })
      }

    render() {
        return (
            <div>
                <div style={{backgroundColor, height="50px", width="50px"}}  onClick={this.changeTop} ></div>
                <div style={{backgroundColor2, height="50px", width="50px"}} onClick={this.changeColor} ></div>        
            </div>
        );
    }
}

export default FUNCTIONDEBAZ;