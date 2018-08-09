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
  
  retrieve(method) {
    console.log(method);
    console.log(this.data);
    
    // Passed-in name from navigation text
    // should match the name="" property from the JSON file
    console.log(this.data.name + '==' + method);
    
    // Retrieve values from the recipe and write the values
    // into the main article tag inside of /assets/templates/main.html
    
    
  }
  
  update(method) {
    console.log(method);
  }
  
}