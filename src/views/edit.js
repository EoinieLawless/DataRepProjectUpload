import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [FoodName, setFoodName] = useState('');
    const [FoodPic, setFoodPic] = useState('');
    const [FoodDescription, setFoodDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/food/'+id)
        .then((response)=>{
            setFoodName(response.data.FoodName);
            setFoodPic(response.data.FoodPic);
            setFoodDescription(response.data.FoodDescription);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editFood = {
            FoodName:FoodName,
            FoodPic:FoodPic,
            FoodDescription:FoodDescription
        }

        axios.put('http://localhost:4000/api/food/'+id,editFood)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit Food Inputted</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Name of food: </label>
                        <input type="text"
                            className="form-control"
                            value={FoodName}
                            onChange={(e)=>{setFoodName(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Picture of Food: </label>
                        <input type="text"
                            className="form-control"
                            value={FoodPic}
                            onChange={(e)=>{setFoodPic(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Description of food: </label>
                        <input type="text"
                            className="form-control"
                            value={FoodDescription}
                            onChange={(e)=>{setFoodDescription(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit Food"></input>
            </form>
        </div>
    );
}