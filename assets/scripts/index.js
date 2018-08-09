import '../sass/style.scss';

window.addEventListener('load', () => {
    console.log('hi everybody!');
    console.log(`Hi, Doctor Nick!`);

    // const recipes = document.querySelectorAll('.recipes li');
    // console.log(recipes);
    const recipes = [].slice.call(document.querySelectorAll('.recipes li'));
    console.log(recipes);
    recipes.forEach((rec) => {
        rec.addEventListener('click', () => {
            console.log(rec.textContent);
        })
    })
})