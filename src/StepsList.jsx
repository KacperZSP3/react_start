import'./IngredientList.css'
import React from "react";

function StepsList(props){
    const stepsListsItems=props.steps.map((step,index)=>{
        return(
            <li key = {index}className= {step.prepared?'prepared':''}>{step.name} </li>
        );
    });

    return(
        <ol>
            {stepsListsItems}
        </ol>
    )
}

export default StepsList;
