import Notiflix from 'notiflix';

function fetchCountries(name){
    return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages`
    ).then((response)=>{
        if(!response.ok){
             throw new Error(
                Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.')
             )
        }
        return response.json();
    });
    
}

export { fetchCountries };