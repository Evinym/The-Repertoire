import React, { Component } from 'react';

import COCA1 from '../images/rosa.jpg';
import '../App.css';

class PANN extends Component {

  render() {
      return (
          <div>
              <ul>
              { this.props.tab.map((el, i) => {
                      return (
                          <li key={i}>{el}<button onClick={() => this.props.delete(i)}>{i}</button></li>
                      )
                  })
                  }
              </ul>
          </div>
      );
  }
}


const produits= [
  {name:"coca",price:"2", src:COCA1}
]

class Commande1 extends Component {
  state={
    donner:[],
  }
  onChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  addName= malet =>{
  this.setState({
    donner:[...this.state.donner,malet.price]
  })
  }
  delete = index => {
    this.state.donner.splice(index, 1);
    this.setState({
      donner: this.state.donner
    })
  }


  render() {
console.log(this.state.donner);

    return (
      <div className="App">
      
            <ul>
                {produits.map((element,index)=>{
                    return(
                        <li key={index}>
                        <p>{element.name}</p>
                        <img src={element.src} height="150px" width="150px" />
                        <p onChange={this.onChange}>{element.price}</p>
                        <button onClick={()=>this.addName(element)}>name</button>
                        </li>
                    );
                })}
            </ul>
            <form onSubmite={this.addName} ></form>
            <PANN tab={this.state.donner} delete={this.delete} />
      
      </div>
    );
  }
}
export default Commande1;