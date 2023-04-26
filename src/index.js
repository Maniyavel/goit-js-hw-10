import './css/styles.css';
import { fetchCountries }  from './fetchCountries';

 const DEBOUNCE_DELAY = 300;
 const input= document.querySelector('#search-box');
 const list= document.querySelector('.country-list');
 const container= document.querySelector('.country-info');

input.addEventListener('input', onInput)

function onInput(){
    console.dir(evt.target);

}