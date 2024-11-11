import './App.css';
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./ IngredientList";
import StepsList from"./StepsList";
import React, { useEffect, useState } from 'react';

function App() {
  const initialRecipe = {
      title: "Mashed potatoes",
      feedback: {
          rating: 4.8,
          reviews: 20
      },
      ingredients: [
          { name: '3 potatoes, cut into 1/2" pieces', prepared: true },
          { name: '4 Tbsp butter', prepared: true },
          { name: '1/8 cup heavy cream', prepared: true },
          { name: 'Salt', prepared: false },
          { name: 'Pepper', prepared: false },
      ],
      steps:[
          {name:'Add cut potatoes to a pot of heavily salted water.'},
          {name:'Bring pot to a boil.'},
          {name:'Boil the potatoes until fork tender, about 15-20 minutes.'},
          {name:'Strain the potatoes.'},
          {name:'Return potatoes to pot.'},
          {name:'Add butter, cream, salt, and pepper to taste.'},
          {name:'Mash potatoes.'},
          {name:'Reseason and add butter and cream as desired.'},
      ],
  };

    const [ recipe, setRecipe ] = useState(initialRecipe);

    const [ prepared, setPrepared ] = useState(false);

    function ingredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);

    return (
      <article>
        <h1>Recipe Manager</h1>
          <RecipeTitle title = {recipe.title} feedback={recipe.feedback} />
          <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
          {<StepsList steps = {recipe.steps}/>}
          { prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
      </article>

  );
}

export default App;
