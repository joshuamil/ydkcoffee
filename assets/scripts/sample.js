/* First File: Brewer.js */
export default class Brewer {

  constructor(properties) {
    
    this.properties = {
      origin: "America",
      type: "manual",
      name: "French Press"
    };
    
    for(var prop in properties) {
      if (properties.hasOwnProperty(prop)) {
        this.properties[prop] = properties[prop];
      }
    }
    
  }
  
  reheat() {
    return false;
  }
  
  pour() {
    return "Yes, please.";
  }

}


/* Second File: AmericanBrewer.js */
import Brewer from './Brewer.js';
export default class AmericanBrewer extends Brewer {
  
  constructor() {
    // Super: makes AmericanBrewer bring in all of the capabilities of Brewer
    super();
    
    // Overriding the default property of "origin"
    this.properties.origin = "American";
  }

  // Overriding the parent class pour function
  pour() {
    return "Hell Yeah!";
  }
  
  // Has the function reheat() as a result of the "super" function
  
}


/* Third File: index.js */
import AmericanBrewer from './AmericanBrewer.js';
const americanBrewer = new AmericanBrewer();
americanBrewer.pour();