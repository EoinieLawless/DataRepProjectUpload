import React from "react";
import {FoodView} from './foodView';

export class Foods extends React.Component{
    render(){
        return this.props.foods.map(
            (food)=>{
                return <FoodView food={food} key={food._id} Reload={this.props.Reload}></FoodView>
            }
        );
    }
}