const btnEl = document.getElementById('btn');
const animeContainerEl = document.getElementById('anime-container');
const imgEl = document.getElementById('img');
const animeNameEl = document.getElementById('anime-name');


const apiURL = " https://api.catboys.com/img"


async function fetchAPI(){
    try{
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        animeNameEl.innerText = 'Updating...';
        imgEl.src = "spinner.svg";
        
        const response = await fetch(apiURL);
        const data = await response.json();

        imgEl.src = data.url;
        animeNameEl.innerText = data.artist;
        animeContainerEl.style.display = 'block';
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime';
    }
    catch(error){
        animeNameEl.innerText = 'an error happened, try again later!';
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime';
    }
}



btnEl.addEventListener('click', fetchAPI);