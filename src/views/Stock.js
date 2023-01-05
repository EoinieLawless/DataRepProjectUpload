import React from "react";
import { Foods } from "./foods";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Stock extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/foods')
            .then((response) => {
                this.setState({ foods: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        foods: []
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3>Here is all our Food contributed</h3>
                            <center>
                                <Foods foods={this.state.foods} Reload={this.componentDidMount}></Foods>
                            </center>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}