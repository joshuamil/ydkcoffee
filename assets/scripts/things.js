export default class Things {
    
    constructor() {
        
    }

    async goo() {
        return 'butts';
    }

    async roo() {
        let guru = await this.goo();
        console.log(guru);
    }

}