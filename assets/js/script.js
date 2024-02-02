// ## open library code ##
function getTopWorkCover(authorName) {

const authorAPI = 'https://openlibrary.org/search/authors.json?q=';
const coverAPI = 'https://covers.openlibrary.org/b/isbn/054792822X-M.jpg';

// fetch author information
fetch(authorAPI + authorName)
  .then(function (response) {
    return response.json();
  })
  .then(function (authorData) {
    // console log data to work out the data structure
    console.log(authorData)
    // console log author's name
    console.log('Author Information:', authorData.docs[0].name);
    // pull author's name into the HTML element
    document.getElementById('author').innerText = `Author: ${authorData.docs[0].name}`
    // console log top work of the author
    console.log(authorData.docs[0].top_work)
    // pull top work of the author into the HTML element
    document.getElementById('book').innerText = `Top Work: ${authorData.docs[0].top_work}`
    
    // fetch the cover
    fetch(coverAPI)
      .then(function (coverResponse) {
        console.log('Book Cover URL:', coverResponse.url);
        const userElement = document.getElementById('cover');
        userElement.src = coverResponse.url;
      })
    })
}
// call function to obtain author name. typing Pratchett gets Terry Pratchett. 
// being more specific and typing Rhianna Pratchett gets his daughter.
getTopWorkCover("J.R.R. Tolkien"); 

// ## cocktail lab code ##
// use Jung's code to get around the CORS issue
const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + 'www.thecocktaildb.com/api/json/v1/1/random.php'

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (drinksData) {
    // console log data to work out the data structure
    console.log(drinksData);

    // console log various bits of data from the JSON
    console.log('Drink Name:', drinksData.drinks[0].strDrink);
    console.log('Alcoholic:', drinksData.drinks[0].strAlcoholic);
    console.log('Category:', drinksData.drinks[0].strCategory);
    console.log('Thumbnail:', drinksData.drinks[0].strDrinkThumb);
    // pull data into the HTML element
    document.getElementById('drinkName').innerText = `Drink Name: ${drinksData.drinks[0].strDrink}`
    document.getElementById('category').innerText = `Category: ${drinksData.drinks[0].strCategory}`
    const thumbNailElement = document.getElementById('thumbnail');
    thumbNailElement.src = drinksData.drinks[0].strDrinkThumb;
  })


