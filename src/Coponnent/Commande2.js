import React, { Component } from 'react';

class PONG extends Component {

    
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

export default PONG;