import React from "react";
import axios from "axios";

export class Contribute extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangeFoodPic = this.onChangeFoodPic.bind(this);
        this.onChangeFoodDescription = this.onChangeFoodDescription.bind(this);
        
        this.state = {
            FoodName:'',
            FoodPic:'',
            FoodDescription:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.FoodName},
        ${this.state.FoodPic},
        ${this.state.FoodDescription}`);

        const food ={
            FoodName:this.state.FoodName,
            FoodPic:this.state.FoodPic,
            FoodDescription:this.state.FoodDescription
        }

        axios.post('http://localhost:4000/api/foods',food)
        .then()
        .catch();

        this.setState({
            FoodName:'',
            FoodPic:'',
            FoodDescription:''
        })
    }

    onChangeFoodName(e){
        this.setState({
            FoodName:e.target.value
        })
    }
    onChangeFoodPic(e){
        this.setState({
            FoodPic:e.target.value
        })
    }
    onChangeFoodDescription(e){
        this.setState({
            FoodDescription:e.target.value
        })
    }

    render() {
        return (
            <div>
                <br />
                <h3>Enter any Food we dont have!</h3>
                <form onSubmit={this.handleSubmit}>
                <br />

                    <div className="form-group">
                        <label>Add Food Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.FoodName}
                            onChange={this.onChangeFoodName}
                        />
                    </div>
                    <br />

                    <div className="form-group">
                        <label>Add Picture of food: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.FoodPic}
                            onChange={this.onChangeFoodPic}
                        />
                    </div>
                    <br />

                    <div className="form-group">
                        <label>Add Food description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.FoodDescription}
                            onChange={this.onChangeFoodDescription}
                        />
                    </div>

                    <br /><br />

                    <input type="submit" value="Add food" />
                </form>
            </div>
        );
    }
}