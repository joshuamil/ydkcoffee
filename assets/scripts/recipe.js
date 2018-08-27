import * as RecipeData from '../recipes/recipes.json';

export default class Recipe {
  
  constructor(properties) {
    this.properties = properties;
    
    // Retrieve our keyword from the classification object
    const keyword = this.properties.type;
    
    // Filtering an array of JSON objects
    this.data = RecipeData.recipes.filter((i) => {
      return i.type === keyword;
    });
  }

  // pushToNav(method) {
  //   console.log(method);
  //   console.log(this.data);
  // }
  
  retrieve(method) {
    console.log(method); // the brew method we clicked on
    console.log(this.data); // the array of recipes
    let display = function(recipe){
      document.getElementById('name').textContent = recipe.name;
      // let body = JSON.stringify(recipe.body);
      // console.log(body);
      document.getElementById('desc').textContent = recipe.body;
      // document.getElementById('inst').textContent = recipe.instructions;
      let steps = document.getElementById('steps');
      steps.innerHTML = "";
      recipe.steps.forEach((step) => {
        console.log(step.instruction);
        let mark = document.createElement('li');
        mark.textContent = step.instruction;
        steps.appendChild(mark);

      });
      console.log(name);
    }
    
    // Passed-in name from navigation text
    // should match the name="" property from the JSON file
    
    // console.log(this.data[0].name + '==' + method);
    this.data.forEach((r) => {
      console.log(r.name);
      // let checker = (r.name == method) ? console.log('true') : console.log('false');
      (r.name == method) ? display(r) : console.log('nope');
    })

    
    // Retrieve values from the recipe and write the values
    // into the main article tag inside of /assets/templates/main.html
    
    
  }
  
  update(method) {
    console.log(method);

  }
  
}