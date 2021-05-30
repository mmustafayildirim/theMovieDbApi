import { elements } from "../base";

export const backToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'});
}

export const displayMovie=movie=>{
    var html= '<div class="row ">';

    var genres="";
    movie.genres.forEach(genre => {
            genres+=` <span class="badge rounded-pill bg-primary ml-2"> ${genre.name}</span>`
    });
    html+= 
        `
        <div class="col-md-4">
            <img class="mr-3 img-fluid" src="https://www.themoviedb.org/t/p/w500${movie.poster_path}" onerror="this.onerror=null;this.src='http://via.placeholder.com/94x141';"
            alt="${movie.title}">
        </div>
        <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="badge rounded-pill bg-primary ml-2"> ${movie.vote_average}</small></p>
                <hr>
                ${genres}
            </div>
        </div>
        
        `
    html+='</div>'
   
    elements.movieDetails.innerHTML=html;
    elements.movieDetailsContainer.classList.remove('d-none');
   
    //movie-details hidden
    const closeDetails=()=>{
        elements.movieDetailsContainer.classList.add('d-none');
    }

    elements.movieDetailsClose.addEventListener('click',closeDetails);
   
}