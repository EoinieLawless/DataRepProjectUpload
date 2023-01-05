import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class FoodView extends React.Component {
    constructor() {
        super();
        this.DeleteFood = this.DeleteFood.bind(this);
    }
    DeleteFood(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/food/' + this.props.food._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }
    render() {
        return (
            <div>

                {/* <Card>
                    <Card.Header>{this.props.food.FoodName}</Card.Header>
                    <Card.Body>

                        <blockquote className="blockquote mb-0">
                            <img src={this.props.food.FoodPic}></img>
                            <footer >
                                {this.props.food.FoodDescription}
                            </footer>

                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.food._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteFood}>Delete food</Button>
                </Card> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.food.FoodPic} />
                    <Card.Body>
                        <Card.Title>{this.props.food.FoodName}</Card.Title>
                        <Card.Text>
                            {this.props.food.FoodDescription}
                        </Card.Text>
                        <Link to={'/edit/' + this.props.food._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteFood}>Delete food</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}