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
    let stripExt = /\.[\w\W]+/gm;
    let stripOpen = /\["/;
    let remus = /_/;
    // let splitText = altText.split(['/', '.']);
    let splitText = altText.split('/');
    // console.log(splitText);
    let chunk = splitText.filter(section => section.includes('.'));
    // console.log(chunk);
    chunk.shift();
    chunk = JSON.stringify(chunk);
    let str = chunk.replace(stripExt, '');
    str = str.replace('["', '');
    str = str.replace("_", ' ');
    // str = `${str[0].toUpperCase()}`;
    // str.shift();
    // console.log(str);
    // Need to use regex to remove any symbols
    // console.log(`image text: ${splitText.replace(regex,'')}`);
    return str;
  }
  
}