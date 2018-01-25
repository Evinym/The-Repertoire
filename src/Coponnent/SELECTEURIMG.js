import React, { Component } from 'react';
import Monimg1 from '../images/paysage.jpg'
import Monimg2 from '../images/rosa.jpg'
import Monimg3 from '../images/paysage.jpg'

class SELECTEURIMG extends Component {
    state={
        value: ""
      }

      ChangeImg=e=>{
        this.setState({
          value: e.target.value
        });
      }


    render() {
        return (
            <div>
                <select name="" id="monselect" onChange={this.ChangeImg} >
                    <option value={Monimg1} >Mon image 1</option>
                    <option value={Monimg2} >Mon image 2</option>
                    <option value={Monimg3} >Mon image 3</option>
                </select>
                <img src={this.state.value} alt="" height="100" width="200"/>
            </div>
        );
    }
}

export default SELECTEURIMG;