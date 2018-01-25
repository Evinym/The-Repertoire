import React, { Component } from 'react';

class METHODUPUSH extends Component {
    state={
        donner:[]
      }

      addName=()=>{
        this.setState({
          donner:[...this.state.donner,"jonathan"]
        })
        }

    render() {
        return (
            <div>
               
      <button onClick={this.addName} >name</button>
       
            </div>
        );
    }
}

export default METHODUPUSH;