import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries }  from './fetchCountries';
import './css/styles.css';



 const DEBOUNCE_DELAY = 300;
 const input= document.querySelector('#search-box');
 const list= document.querySelector('.country-list');
 const container= document.querySelector('.country-info');

 

const onInput=debounce(evt=>{
   const name=evt.target.value.trim();
   if (!name){
      list.innerHTML="";
      container.innerHTML="";
      return;
   }

   fetchCountries(name)
   .then(findCountry)
   .catch(error => console.log(error));
}, DEBOUNCE_DELAY);
   
   function findCountry(countries){
      const arrLength=countries.length;
      if(arrLength>10){
         Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }

      if(arrLength>1){
         list.innerHTML="";
         return createMarkup(countries);
      }

      if(arrLength===1){
         list.innerHTML="";
         return createMarkupAll(countries);
      }
   }

  function createMarkup(countries){
   const markup=countries.map(country=>{
      return
      `<div class="country">
      <img  src='${country.flags.svg} alt="flag of ${country.name.official}'>
      <h2 class="country-title">${country.name.official}</h2>
      </div>
      <p><b>Capital</b>:${country.capital}</p>
      <p><b>Population</b>:${country.population}</p>
      <p><b>Languages</b>:${Object.value(country.languages)}</p>
      `
   })
  
    .join('');
    container.innerHTML = markup;
}

function createMarkupAll(countries){
   const markup=countries.map(country=>{
      return 
      `<li class="country">
      <img src="${country.flags.svg} alt="flag of ${country.name.official}'>
      <h2 class="country-title">${country.name.official}</h2>
      </li>
      `
   })
}

input.addEventListener('input', onInput);