const checkbox = document.getElementById('preview-theme');
const btnNext = document.getElementById('btn-next');
const btnPrevious = document.getElementById('btn-previous');

let page = 1;

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?';

const apiKey = 'ac7148c18336833d7f621c7cf2db2904';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcxNDhjMTgzMzY4MzNkN2Y2MjFjN2NmMmRiMjkwNCIsInN1YiI6IjY0NTk1NDg3NmFhOGUwMDBmZjViM2QzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbcwZSVFnJXbZ_FLhFwexaGP82aJSsG0lyDM2AQ6NUA';
const urlApi = `${baseUrl}api_key=${apiKey}&language=en-US&page=`;

btnNext.addEventListener('click', () => {
  if(page < 100){
    page += 1 ;
    getApiMovies(page);
  }
})

btnPrevious.addEventListener('click', () => {
  if(page > 1){
    page -= 1;
    getApiMovies(page);
  }
})

const getApiMovies = async (page) => {
  try {
    const response = await fetch(urlApi+page, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Error: Network response was not ok');
    }
    const data = await response.json();
    let movies = '';
    data.results.forEach(movie => {
      movies += `
        <div>
          <img class="image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
          <h1>${movie.title}</h1>
        </div>
      `;
    });
    document.getElementById('movies-cards').innerHTML = movies;
  } catch (error) {
    console.error(error);
  }
};

getApiMovies(page);

// change theme

checkbox.addEventListener('change', () => {

  const bodyTheme = document.getElementById('body-change');
  
  if (checkbox.checked) {
    bodyTheme.classList.add('dark-mode');
  } else {
    bodyTheme.classList.remove('dark-mode');
  }
});