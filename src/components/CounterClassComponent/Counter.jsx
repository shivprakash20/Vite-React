import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div className="card counter-card" style={{ width: "18rem" }}>
                <img src="../../../public/images/watch.jpg" className="card-img-top" alt="watch_image" />
                <div className="card-body">
                    <h5 className="card-title">Counter Class Component</h5>
                    <p className='card-text'>You clicked {this.state.count} times</p>
                    <button type="button" className="btn btn-primary" onClick={this.handleClick} >Click Me</button>
                </div>
            </div>
        );
    }
}

export default Counter;
