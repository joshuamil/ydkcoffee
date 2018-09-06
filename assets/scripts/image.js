// import recs from './recipe.js'; 

export default class Image {
  
  constructor(recipe) {
    this.recipe = recipe;
  }
  
  renderImage() {
    
    const img = (this.recipe.img)? this.recipe.img : 'unknown.png';
    const alt = (this.recipe.name)? this.recipe.name : this.defAltText();
    
    const image = `<img src="${img}" alt="${alt}" />`;
    
    console.log(image);
    
    return image;
  }
  
  defAltText() {
    let altText = "";
    return altText;
  }
  
}