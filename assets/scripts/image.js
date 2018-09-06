// import recs from './recipe.js'; 

let recs =
    [
        {
            name: "Aeropress",
            url: 'https://cdn.shopify.com/s/files/1/0513/0801/products/aeropress_grande.jpg?v=1402410656',
        },
        {
            name: "Toast",
            url: 'http://www.slyhkitchen.com/wp-content/uploads/2015/09/Toast.jpg',
        },
        {
            name: "Chemex",
            url: 'https://images.ctfassets.net/3h0qt25be5vd/5PvJBfq0EM208C4MmkcsQu/9940a19d6310f63dd9ff71649b590470/Brew_Guide-Chemex-Step05.jpg?w=960&h=640&fm=jpg&q=70',
        },
        {
            name: "Hario V60",
            url: 'https://static1.squarespace.com/static/56637d82e4b055b21a37d658/56751b8469492e8da7dd192b/56834ac49cadb697dd8dab14/1484372719913/?format=2500w',
        },
        {
            name: "French Press",
            url: 'https://www.littlecoffeeplace.com/wp-content/uploads/2015/12/Top-Rated-French-Presses.jpg',
        }
    ]

export default class Image {
    constructor(name) {
        this.name = name;
        this.url = "";
        // console.log(recs);
        console.log(this.name);
        recs.filter((i) => {
            console.log(i.url);
            if (this.name === i.name) {
                return this.url = i.url;
            }
        })

    }
}