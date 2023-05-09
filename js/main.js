const checkbox = document.getElementById('preview-theme');
const element = document.getElementById('body-change');
const btnNext = document.getElementById('btn-next');
const btnPrevious = document.getElementById('btn-previous');

let page = 1;

const baseUrl = "https://api.themoviedb.org/3/movie/popular?";

const apiKey = 'ac7148c18336833d7f621c7cf2db2904';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcxNDhjMTgzMzY4MzNkN2Y2MjFjN2NmMmRiMjkwNCIsInN1YiI6IjY0NTk1NDg3NmFhOGUwMDBmZjViM2QzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbcwZSVFnJXbZ_FLhFwexaGP82aJSsG0lyDM2AQ6NUA';
const urlApi = `${baseUrl}api_key=${apiKey}&language=en-US&page=${page}`;

btnNext.addEventListener('click', () => {
  if(page < 100){
    page+=1;
    getApiMovies();
  }
})

btnPrevious.addEventListener('click', () => {
  if(page > 1){
    page-=1;
    getApiMovies();
  }
})

const getApiMovies = async () => {
    fetch(urlApi, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then((response) => {
      // Si la respuesta es exitosa, convierte los datos a JSON
      if (response.ok) {
        return response.json();
      };
      // Si hay un error, lanza una excepción
      throw new Error("Error: Network Error");
    })
    .catch(error => {
      // Si hay un error en cualquiera de las etapas anteriores, se captura aquí
      console.error(error);
    });
}

getApiMovies();

// change theme
checkbox.addEventListener('change', function() {
  if (this.checked) {
    element.classList.add('dark-mode');
  } else {
    element.classList.remove('dark-mode');
  }
});