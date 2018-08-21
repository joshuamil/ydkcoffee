import '../sass/style.scss';

import Recipe from './recipe.js';
import Brewer from './brewers.js';

window.addEventListener('load', () => {
    console.log('hi everybody!');

    // This is our primary instance of the Class
    const recipe = new Recipe({
      "type": "coffee"
    });

    console.log(recipe);
    
    // This is a second instance of the same Class
    const recipe2 = new Recipe({
      "type": "food"
    });

    // This is extra info to work with for additional help
    const brewer = new Brewer({
        
    });

    const brewers = brewer.pour();

    console.log(brewers);
    //END BREWER STUFF


    const recipes = [].slice.call(document.querySelectorAll('.recipes li'));
    console.log(recipes);
    
    recipes.forEach((rec) => {
        rec.addEventListener('click', () => {
          
            // Use a class function to request a specific
            // piece of JSON content
            recipe.retrieve(rec.textContent);
            
        })
    })
})