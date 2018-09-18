// import recs from './recipe.js'; 

export default class Image {
  
  constructor(recipe) {
    this.recipe = recipe;
  }
  
  renderImage() {
    
    const img = (this.recipe.img)? this.recipe.img : 'unknown.png';
    const alt = this.defAltText();
    // const alt = (this.recipe.name)? this.recipe.name : this.defAltText();
    
    const image = `<img src="${img}" alt="${alt}" />`;
    
    // console.log(image);
    
    return image;
  }
  
  defAltText() {
    const altText = this.recipe.img;
    let regex = /[0-9]+/gm;
    // let splitText = altText.split(['/', '.']);
    let splitText = altText.split('/');
    console.log(splitText);
    splitText.filter(section => section.includes('.jpg' || '.png'));
    // console.log(`image text: ${altText.replace(regex,'')}`);
    return altText;
  }
  
}