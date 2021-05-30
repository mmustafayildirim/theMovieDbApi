import { elements } from "../base";

export const clearInputs = () => {
    elements.searchInput.value = '';
}
export const clearResult = () => {
    elements.searchResult.innerHTML = '';
}
export const displayResult = (keywords,data) => {
    data.results.forEach(movie => {
        const html =
            `
                <div class="media d-flex mb-3" >
                    <img class="mr-3" src="https://www.themoviedb.org/t/p/w92${movie.poster_path}" onerror="this.onerror=null;this.src='http://via.placeholder.com/94x141';"
                    alt="${movie.title}">
                    <div class="media-body  px-2">
                        <h5 class="mt-0"> 
                            <span class="badge rounded-pill bg-primary ml-2"> ${movie.vote_average}</span> &nbsp
                            <a href="#${movie.id}">${movie.title}</a>
                        </h5>
                        <p>${movie.overview}</p>

                    </div>
                </div>
            `;
        elements.movieListHeader.innerHTML=`${keywords} Hakkında ${data.total_results} Sonuc Bulundu.`
        elements.searchResult.insertAdjacentHTML('beforeend', html);
        elements.searchResult.classList.remove('d-none');
    });
}