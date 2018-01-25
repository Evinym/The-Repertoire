import React, { Component } from 'react';

class FUNCTIONDEBAZ extends Component {

    state={
        backgroundColor:"red",
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
          backgroundColor: "yellow"
        })
      }

    render() {
        return (
            <div>
                <div className="box" style={{backgroundColor}}  onClick={this.changeColor} ></div>
                <div className="tic" onClick={this.changeTop} ></div>        
            </div>
        );
    }
}

export default FUNCTIONDEBAZ;