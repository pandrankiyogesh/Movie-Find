const URL="https://www.omdbapi.com/?i=tt3896198&apikey=bdc71c51&s="
const API_KEY_SEARCH="https://www.omdbapi.com/?apikey=bdc71c51&i="
var card=document.getElementsByClassName("moviecards")[0];
function searching()
{
    let search_input=document.getElementById("moviename");
    let query=search_input.value ;
    if(query)
    {
        getmovies(URL+query);
    }
}
async function getmovies(result)
{
    const response=await fetch(result);
    const orgresponse=await response.json();
    console.log(orgresponse)
    showmovies(orgresponse.Search);
}
function showmovies(movies)
{ 
   card.innerHTML=""  
    movies.forEach(async function(movie){
        const res=await fetch(API_KEY_SEARCH+movie.imdbID);
        const orgres=await res.json();
        movieshow(orgres);
   });
}
function movieshow(orgres)
{
    const movieele=document.createElement("div");
    movieele.classList.add("moviecards");
    movieele.innerHTML=`
    <div class="card">
      <div class="poster"><img src="${orgres.Poster} width="300px" height="300px" "></div>
       <br>
       <div class="movie-description">
       <div><b>TITLE:</b><span class="title">${orgres.Title}</span></div>
       <div><b>RATING:</b><span class="title">${orgres.imdbRating}</span></div>
       <div><b>DIRECTOR:</b><span class="title">${orgres.Director}</span></div>
       <div><b>RELEASEDATE:</b><span class"title">${orgres.Released}</span></div>
       </div>
    </div>
    `;
    card.appendChild(movieele)
}


