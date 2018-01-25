import React, { Component } from 'react';
import '../App.css';

const data=[
    {name:"Brown", price:"20000"},
    {name:"Lucile", price:"50000"},
    {name:"vhite", price:"120000"},
    {name:"Kévine", price:"250000"}
  ]

class METHODUMAP extends Component {
    render() {
        return (
            <div className="mapMoiSa">
            <ul>
                {data.map((element,index)=>{
                    return(
                        <li key={index}>je vous presente {element.name} </li>
                    );
                })}
            </ul>

            </div>
        );
    }
}

export default METHODUMAP;