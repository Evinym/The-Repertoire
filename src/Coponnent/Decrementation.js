import React, { Component } from 'react';

class Decrementation extends Component {

    state = {
        nb: 20
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
                <h1>{nb <= 10 ? 'Plus que '+ nb +' pass' : nb}</h1>
                <button onClick={this.decrement}>-</button>
                
            </div>
        );
    }
}

export default Decrementation;