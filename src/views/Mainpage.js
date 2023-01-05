import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";



export class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <br />
                    <Card>
                        <CardHeader>
                            <h1>Welcome to the Farmers Market.ie</h1>
                        </CardHeader>
                    </Card>
                    <br />

                    <div>
                        <p>
                            Climate change is a big threat to the planet as well as food security. Just last year,
                            the global carbon dioxide emission rose to an all-time high.
                            While emissions from fossil fuel burning and industrial uses were most responsible,
                            farming also plays a role. This may come as a surprise,
                            but food is among your household's largest sources of carbon dioxide equivalent emissions.
                        </p>
                        <Carousel slide={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-80"
                                    src="https://tse4.mm.bing.net/th?id=OIP.MCGoDubKBsnLe9xjIPKshQHaE8&pid=Api&P=0"
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-80 l-80"
                                    src="https://tse1.mm.bing.net/th?id=OIP.jtx-OiAfU5sh1Tn4a_B8kAHaE8&pid=Api&P=0"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-80"
                                    src="https://tse2.mm.bing.net/th?id=OIP.5EIUUZRbJqCFgD9ihaYpPAHaE8&pid=Api&P=0"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        {/* <div>
                            <img src="https://images.ireland.com/media/Imported-Articles-48/dd01da3ab9874528a5b18c026cc3f67d.webp?w=1934" class="d-block w-80 l-100" alt="..."></img>
                        </div> */}

                    </div>


                    <br />

                    <Card>
                        <CardHeader>
                            <h3>A bit of History</h3>
                        </CardHeader>
                    </Card>


                    <p>
                        The current concept of a farmers' market is similar to past concepts, but different in relation to other forms,
                        as aspects of consumer retailing, overall, continue to shift over time. Similar forms existed before the Industrial Age,
                        but often formed part of broader markets, where suppliers of food and other goods gathered to retail their wares.
                        Trading posts began in 1930s, a shift toward retailers who sold others' products more than their own. General stores and grocery stores continued that specialization trend in retailing, optimizing the consumer experience, while abstracting it further from production and from production's growing complexities.
                    </p>


                </center>
            </div>
        );
    }
}