import '../sass/style.scss';

import Recipe from './recipe.js';

window.addEventListener('load', () => {
    console.log('hi everybody!');
    console.log(`Hi, Doctor Nick!`);

    // This is our primary instance of the Class    
    const recipe = new Recipe({
      "type": "coffee"
    });
    
    // This is a second instance of the same Class
    const recipe2 = new Recipe({
      "type": "food"
    });

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