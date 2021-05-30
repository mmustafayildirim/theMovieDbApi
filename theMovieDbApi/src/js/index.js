//b559b9ad393a333c444e4d921641ff3f
//https://api.themoviedb.org/3
//https://api.themoviedb.org/3/search/movie?api_key=b559b9ad393a333c444e4d921641ff3f&language=en-US&query=abc&page=1&include_adult=false

import { Movie } from "./models/Movie";
import Search from "./models/Search";
import {elements,renderLoader} from ".//base"
import * as searchView from "./views/searchView";
import * as moviView from "./views/movieView";


const state={};
//search controller
const searchContoller= async()=>{
    const keywords=elements.searchInput.value;
    if(keywords){
         state.search=new Search(keywords);
         searchView.clearInputs();
         searchView.clearResult();
         await state.search.getResult();
        
         searchView.displayResult(keywords,state.search.data)
    }else{
        alert('anahtar kelime gir.')
    }
}
elements.searchForm.addEventListener('submit',(e)=>{
    searchContoller()
    e.preventDefault();
    console.log('tıklandı')
})
//Movie controller
const movieController=async ()=>{
    const id=window.location.hash.replace('#','');
    if(id){
        state.movie=new Movie(id);
        await state.movie.getMovie();
        moviView.displayMovie(state.movie.data);
        moviView.backToTop();
    }
}
window.addEventListener('hashchange',movieController);