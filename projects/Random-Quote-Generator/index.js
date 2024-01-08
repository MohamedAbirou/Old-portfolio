const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.getElementById('btn');


const apiURL = "https://api.quotable.io/random";


async function fetchAPI(){
    try{
        quoteEl.innerText = 'Updating...';
        authorEl.innerText = 'Updating...';
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';

        const response = await fetch(apiURL);
        const data = await response.json();

        quoteEl.innerText = data.content;
        authorEl.innerText = `~ ${data.author}`;
        btnEl.disabled = false;
        btnEl.innerText = 'Get a Quote';

    }
    catch(error){
        quoteEl.innerText = 'an error happened, try again later!';
        authorEl.innerText = 'an error happened';
        btnEl.disabled = false;
        btnEl.innerText = 'Get a Quote';
    }
}






btnEl.addEventListener('click', fetchAPI);