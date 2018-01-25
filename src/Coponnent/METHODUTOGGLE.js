import React, { Component } from 'react';
import Buc5 from '../images/whoopi.jpg'

class TOGGLE extends Component {
    state={
        toggle:true, etat:"none"
      }

      onClick=()=>{
        if (this.state.toggle===true){
          this.setState({toggle:false,etat:"block"})
          console.log(this.state.toggle)
        }else {
          this.setState({toggle:true,etat:"none"})
        }  
      }

    render() {
        return (
            <div>
                <button onClick={this.onClick} >Go !</button>
                <img style={{display:this.state.etat}} src={Buc5} alt="lapin" width="275" />                
            </div>
        );
    }
}

export default TOGGLE;