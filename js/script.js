// Route - Full stack diploma C38 - SAT & TUE - ALEX
// Date : 24-June-2022
// exam # 2 - JS - APIs Movies App
// Name : Bishoy Saeed Fayez
// e-mail : bishoysfayez@gmail.com 
// Mobile & Whatsapp : 01211351223 -->

// global Vars

const apiKey = '1f2b3471fcbc3ab01e1a31a27611d13b'
const allURL = 'https://api.themoviedb.org/3/trending/all/day?api_key=1f2b3471fcbc3ab01e1a31a27611d13b';
const topRatedURL = 'https://api.themoviedb.org/3/trending/all/week?api_key=1f2b3471fcbc3ab01e1a31a27611d13b';
const upcomingURL = 'https://api.themoviedb.org/3/trending/person/day?api_key=1f2b3471fcbc3ab01e1a31a27611d13b';
const nowPlayingMoviesURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=1f2b3471fcbc3ab01e1a31a27611d13b';
const popularMoviesURL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=1f2b3471fcbc3ab01e1a31a27611d13b';
const tvURL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0-bMJBYvkT5o3zwB52IU7fFnpuWneRPlub2vIb32TJG5adm5lvJiBPIIA';
const seriesURL = 'https://api.themoviedb.org/3/trending/series/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR0-bMJBYvkT5o3zwB52IU7fFnpuWneRPlub2vIb32TJG5adm5lvJiBPIIA';


// search results global var 
let searchResultsArray = [];
let searchObjectsArray= [];

async function getMovies(url){
  let moviesResponse = await fetch(url);
  let moviesArray = ((await moviesResponse.json()))
  //console.log(moviesArray.results);
  postMovies(moviesArray.results);
  
}

function postMovies(moviesArray) {
  let cartona = '';
  //searchResultsArray = moviesArray;
  //console.log(searchResultsArray);
  for (let i = 0; i < moviesArray.length; i++) {

    if (moviesArray[i].original_title != undefined) {


      cartona += `

  
      <div class="col-sm-12 col-md-4">
      <div class = "poster-container w-100 p-0">
  <img src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"  class="w-100 img-result" alt="${moviesArray[i].original_title}" srcset=""class="img-fluid">
  
  <div class="layer bg-danger w-100 text-center">
    <h6 class = "text-dark fs-4">${moviesArray[i].original_title}</h6>
    <p class="my-3 text-center">${moviesArray[i].overview}</p>
    <p class="my-3 fs-4 text-center">${moviesArray[i].vote_average}</p>
    <p class="my-3 text-center">${moviesArray[i].release_date}</p>

  </div>
  </div>
</div>

  
  `
  searchResultsArray.push(moviesArray[i].original_title);
  searchObjectsArray.push({
    name:moviesArray[i].original_title,
    overview: moviesArray[i].overview,
    vote_average: moviesArray[i].vote_average,
    poster_path: moviesArray[i].poster_path

  });


    } else if (moviesArray[i].name != undefined){
      searchResultsArray.push(moviesArray[i].name);
      searchObjectsArray.push({
        name:moviesArray[i].name,
        overview: moviesArray[i].overview,
        vote_average: moviesArray[i].vote_average,
        vote_average: moviesArray[i].release_date,
        poster_path: moviesArray[i].poster_path
      });
      cartona += `

  
  <div class="col-sm-12 col-md-4">
  <div class = "poster-container w-100 p-0">
    <img src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"  class="w-100 img-result" alt="${moviesArray[i].original_title}" srcset=""class="img-fluid">
    
    <div class="layer bg-danger w-100 text-center">
      <h6 class = "text-dark fs-4">${moviesArray[i].name}</h6>
      <p class="my-3 text-center">${moviesArray[i].overview}</p>
      <p class="my-3 fs-4 text-center">${moviesArray[i].vote_average}</p>
      <p class="my-3 text-center">${moviesArray[i].release_date}</p>
    </div>
    </div>
  </div>
  
    
    `

    } else {
      searchResultsArray.push(moviesArray[i].title);
      searchObjectsArray.push({
        name:moviesArray[i].title,
        overview: moviesArray[i].overview,
        vote_average: moviesArray[i].vote_average,
        vote_average: moviesArray[i].release_date,
        poster_path: moviesArray[i].poster_path
      });
      cartona += `

  
      <div class="col-sm-12 col-md-4">
      <div class = "poster-container border-rounded w-100 p-0">
    <img src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"  class="w-100 img-result" alt="${moviesArray[i].original_title}" srcset="" class="img-fluid">
    
    <div class="layer w-100 text-center">
      <h6 class = "text-dark fs-4">${moviesArray[i].title}</h6>
      <p class="my-3 text-center">${moviesArray[i].overview}</p>
      <p class="my-3 fs-4 text-center">${moviesArray[i].vote_average}</p>
      <p class="my-3 text-center">${moviesArray[i].release_date}</p>
  
    </div>
    </div>
  </div>
  
    
    `
    }
  }

    $('.results').html(cartona);
  }


// open navbar

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
       
    document.querySelector('.btnsContainer').innerHTML = `<button class="openbtn bg-white text-dark fw-bolder d-block closeBtn" onclick="closeNav()"> <i class="fa-regular fa-x"></i>  </button>`;
    //animateLinks();
    $('.nav-link').animate({'margin-top':'10px'});
    $('.nav-link').show();

  }
  // close navbar
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector('.btnsContainer').innerHTML = ` <button class="openbtn bg-white text-dark fw-bolder d-block openBtn" onclick="openNav()"><i class="fa-solid fa-bars"></i> </button> `;
    $('.nav-link').animate({'margin-top':'1000px'});

  }

// search movies from API
function searchMovie(){
  let keyword = $('#movie-search').val();
  let searchURL = `https://api.themoviedb.org/3/search/company?api_key=1f2b3471fcbc3ab01e1a31a27611d13b&query=${keyword}&page=1age=1`
  //console.log(searchURL);
  getSearchedMovies(searchURL);
}

// get searched movies
async function getSearchedMovies(url){
  let moviesResponse = await fetch(url);
  let moviesArray = ((await moviesResponse.json()))
  //console.log(moviesArray.results);
  postSearchedMovies(moviesArray.results);
  
}
function postSearchedMovies(moviesArray){
  let cartona = '';

  for (let i = 0; i < moviesArray.length; i++) {

   


      cartona += `

  
      <div class="col-sm-12 col-md-4">
      <div class = "poster-container w-100 p-0">
  <img src="https://image.tmdb.org/t/p/original${moviesArray[i].logo_path}"  class="w-100 img-result" alt="${moviesArray[i].original_title}" srcset=""class="img-fluid">
  
  <div class="layer bg-danger w-100 text-center">
    <h6 class = "text-dark fs-4">${moviesArray[i].name}</h6>


  </div>
  </div>
</div>

  
  `

        
  }

    $('.results').html(cartona);
  }



// filter search results
function searchOnResults(){
  let keyword = document.querySelector('#movie-by-word').value;
  console.log(searchResultsArray)
  let newFilteredObject =[];
   let newFilteredArray = searchResultsArray.filter(element => {
     if (element.indexOf(keyword) !== -1) {
       return true;
     }
     
   });
   console.log(newFilteredArray);
// populate array of objects
//    for (let i = 0; i < searchObjectsArray.length; i++){
//     for(let j = 0; j < newFilteredArray; j++){
//       console.log('newFilteredArray', newFilteredArray[j]);
//       console.log('search Object', searchObjectsArray[i]);

//       if (newFilteredArray[j] == searchObjectsArray[i].name){
//         newFilteredObject.pop(searchObjectsArray);
//       }
//     }
//    }
//    console.log('targeted array', newFilteredObject);
//   console.log('key', keyword);
//   console.log(newFilteredArray);
}



// validate contact-us form
function validateForm() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#yourMail').value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}



// start page get movies 

getMovies(allURL);

    