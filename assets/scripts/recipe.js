// import * as RecipeData from '../recipes/recipes.json';
import Image from './image.js';

let RecipeData;
let BrewerData;
let combinedData = [];

export default class Recipe {

  constructor(properties) {

    this.properties = properties;

     // Retrieve our keyword from the classification object
     const keyword = this.properties.type;

     let recs = [];

    const recipeGrabber = fetch('http://localhost:1234/recipes.json', {
        credentials: "same-origin"
      })
      .then((response) => response.json())
      .then((response) => RecipeData = response);
    // .then(() => console.log(RecipeData.recipes));
    //console.log is returning the recipes array. So why is it not being filtered?

    const brewerz = fetch('http://localhost:1234/types.json', {
        credentials: 'same-origin'
      })
      .then((response) => response.json())
      .then((response) => BrewerData = response);

    Promise.all([recipeGrabber, brewerz]).then(() => {
      console.log('both promises fired');
      // this.properties = properties;

      // // Retrieve our keyword from the classification object
      // const keyword = this.properties.type;

      // let recs = [];

      // Filtering an array of JSON objects
      this.data = RecipeData.recipes.filter((i) => {
        recs.push(i.name);
        return i.type === keyword;
      });
    })
    .then(()=> {
      combinedData.push(RecipeData, BrewerData);
      console.log(combinedData);
    });
  }

  retrieve(method) {
    console.log(method); // the brew method we clicked on
    console.log(this.data); // the array of recipes

    fetch('http://localhost:1234/recipes.json', {
        credentials: "same-origin"
      })
      .then((response) => response.json())
      .then((response) => console.log(response))
    // .then((myJson) => console.log(JSON.stringify(myJson)));

    let display = function (recipe) {
      /*
      1. add an 'image' class that creates and inits an
      object with some preset properties (size, etc.),
      2. dynamically append a src using an array of
      name/url pairs (if name == keyword, src: ${url})
      3. add the image here dynamically before progressing.
      */
      const img = new Image(recipe).renderImage();
      document.querySelector('.image').innerHTML = img;
      document.querySelector('title').innerHTML = recipe.name;

      document.querySelector('#name').textContent = recipe.name;
      // let body = JSON.stringify(recipe.body);
      // console.log(body);
      document.querySelector('#desc').textContent = recipe.body;
      // document.getElementById('inst').textContent = recipe.instructions;
      let steps = document.querySelector('#steps');
      let mark = "";
      recipe.steps.forEach((step) => {
        mark += `<li>${step.instruction}</li>`;
      });
      //Best practice?
      steps.innerHTML = mark;
      //Discuss security
      //Also, if mark is not init as an array, the first 
      // item is 'undefined' atop the <ol>. Why?

    }

    // Passed-in name from navigation text
    // should match the name="" property from the JSON file

    // console.log(this.data[0].name + '==' + method);
    this.data.forEach((r) => {
      console.log(r.name);
      // let checker = (r.name == method) ? console.log('true') : console.log('false');
      (r.name == method) ? display(r): console.log('nope');
    })


    // Retrieve values from the recipe and write the values
    // into the main article tag inside of /assets/templates/main.html


  }

  update(method) {
    console.log(method);

  }

}

// export let recs;