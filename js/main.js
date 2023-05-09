const image = document.getElementById('imgg');
const title = document.getElementById('titlee'); 

const baseUrl = "https://api.themoviedb.org/3";
const endpoint = "/movie/550?";

const apiKey = 'ac7148c18336833d7f621c7cf2db2904';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcxNDhjMTgzMzY4MzNkN2Y2MjFjN2NmMmRiMjkwNCIsInN1YiI6IjY0NTk1NDg3NmFhOGUwMDBmZjViM2QzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbcwZSVFnJXbZ_FLhFwexaGP82aJSsG0lyDM2AQ6NUA';
const urlApi = `${baseUrl}${endpoint}api_key=${apiKey}`;

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
  }
  // Si hay un error, lanza una excepción
  throw new Error("Error de red");
})
.then(data => {
  title.textContent = `Tittle: ${data.title}`;
  image.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
})
.catch(error => {
  // Si hay un error en cualquiera de las etapas anteriores, se captura aquí
  console.error(error);
});

console.log('Request send');