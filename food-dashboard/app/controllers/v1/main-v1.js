
import { getDataForm, showDataForm } from "./controller-v1.js";
import { Food } from "../../models/v1/model-v1.js";

let createFood = () =>{
    let data = getDataForm();
    let{id,name,type, price,discount,status,img,desc,} = data;
    let food = new Food(id,name,type, price,discount,status,img,desc,);
    console.log(food);
    showDataForm(food);
}

window.addFood = createFood;