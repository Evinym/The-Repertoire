import React, { Component } from 'react';

class JCSEKETKRI extends Component {
    state = {
        inputValue: '',
      }
    
      onChange = e => {
        this.setState({
          inputValue: e.target.value
        })
      }
   
      render() {
    
        return (
          <div>
            <h1>To Do List</h1>
    
              <input type="text" value={this.state.inputValue} onChange={this.onChange}/>

            <p>{this.state.inputValue}</p>

          </div>
        );
      }
    }

export default JCSEKETKRI;