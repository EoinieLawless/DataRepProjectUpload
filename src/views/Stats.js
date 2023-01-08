import React from "react";


export class Stat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div ClassName="App">
                <br /><br />
                <h1>Counter for amount</h1>
                <br />
                <button onClick={this.increment} ClassName="counter">+</button>
                <br />
                <h2> Times button hit{this.state.count} </h2>
            </div>
        );
    }
}