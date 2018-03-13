import React, { Component } from 'react';

class compteur extends Component {
    state = {
        nb: 1
      }
    
      increment = () => {
        const { nb } = this.state;
        this.setState({
          nb: nb + 1
        })
      }
    
      decrement = () => {
        const { nb } = this.state;
        if (nb > 0) {
          this.setState({
            nb: nb - 1
          })
        }
      }
    render() {

        const { nb } = this.state;

        return (
            <div>
            <h1>{nb >= 10 ? 'WIN' : nb}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        );
    }
}

export default compteur;