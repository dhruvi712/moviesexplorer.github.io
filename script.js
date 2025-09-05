const moviesContainer = document.getElementById('movies-container');
const searchInput = document.getElementById('search-input');

// Movie data
const movies = [
  { "title": "The Dark Knight", "year": "2008", "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" },
  { "title": "Inception", "year": "2010", "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Interstellar", "year": "2014", "poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Avengers: Endgame", "year": "2019", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s" },
  { "title": "Parasite", "year": "2019", "poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Joker", "year": "2019", "poster": "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg" },
  { "title": "Titanic", "year": "1997", "poster": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "The Matrix", "year": "1999", "poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Yeh Jawaani Hai Deewani", "year": "2013", "poster": "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Swades", "year": "2004", "poster": "https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Mahavatar Narsimha", "year": "2024", "poster": "https://m.media-amazon.com/images/M/MV5BNzhkMjFhOTItMTczNi00YWM1LTlhZjItOTc4OTA0OWVhZTIzXkEyXkFqcGc@._V1_.jpg" },
  { "title": "3 Idiots", "year": "2009", "poster": "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Pink", "year": "2016", "poster": "https://m.media-amazon.com/images/M/MV5BZGY0NWI0NmQtMjhiYi00ZjM4LWJhNjMtOGRkOTc0ZjI5M2ZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Super 30", "year": "2019", "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NDIxODQ5N15BMl5BanBnXkFtZTgwNzYyMzcyNjM@._V1_.jpg" },
  { "title": "Andhadhun", "year": "2018", "poster": "https://m.media-amazon.com/images/M/MV5BMjZiYTNkNjUtNzI3MC00YWJmLTljM2QtNTI3MTU3ODYzNWFjXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Dangal", "year": "2016", "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg" },
  { "title": "Zindagi Na Milegi Dobara", "year": "2011", "poster": "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_.jpg" },
  { "title": "Kabhi Khushi Kabhie Gham", "year": "2001", "poster": "https://m.media-amazon.com/images/M/MV5BN2MyZGVhNmMtY2JkNy00ZmIzLTkwOGItY2NiM2MyOGMxODkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Chennai Express", "year": "2013", "poster": "https://m.media-amazon.com/images/M/MV5BNDM5ZWM2ZTktZTM5My00NGQzLWFkYmItZjAyNDU0ZTliOGIyXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Bajrangi Bhaijaan", "year": "2015", "poster": "https://m.media-amazon.com/images/M/MV5BYzVjMjZiNGUtZjZiNy00Yzg4LWEzYzYtMmI1NDg5NWNiNjUwXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Barfi!", "year": "2012", "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Queen", "year": "2014", "poster": "https://m.media-amazon.com/images/M/MV5BZWU0ZWFhODYtMWE5NC00YzNiLWJlZTctMjFhODhjNDdmZjFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Padmaavat", "year": "2018", "poster": "https://m.media-amazon.com/images/M/MV5BNzA4ZWVmNDUtMzE0Yi00OGYyLWFlNDYtZWNkMWIzNDk1ZTg2XkEyXkFqcGc@._V1_.jpg" },
  { "title": "Gully Boy", "year": "2019", "poster": "https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@._V1_.jpg" },
  { "title": "PK", "year": "2014", "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Taare Zameen Par", "year": "2007", "poster": "https://m.media-amazon.com/images/M/MV5BNGU4MWNlZDctYTgzNS00ZGJkLWFlMjMtNDdkZjg4NWZlYTM5XkEyXkFqcGc@._V1_.jpg" },
  { "title": "Race 2", "year": "2013", "poster": "https://m.media-amazon.com/images/M/MV5BODQzMjNlN2EtYmE4NC00ZjgwLTkwMTQtMGFkZDBmYzIyMDgxXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Jodhaa Akbar", "year": "2008", "poster": "https://m.media-amazon.com/images/M/MV5BNzg5YWI5YjMtMjhmNi00MDQxLTlmNWUtM2IzOWMzMDNhOTMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Raazi", "year": "2018", "poster": "https://m.media-amazon.com/images/M/MV5BM2QyMTUyNDktN2JlYi00MmYxLWIyNTItNjYxZWI4OTU4NWNmXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Sultan", "year": "2016", "poster": "https://m.media-amazon.com/images/M/MV5BMmM4NzJjNTQtZGU0Mi00NmJhLTkxMWQtYThiYjA2YjlhMjRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "Bahubali: The Beginning", "year": "2015", "poster": "https://m.media-amazon.com/images/M/MV5BN2MyZTVmYTgtY2EzYS00YzkxLWIxMDItNWI4MDczN2JjMjUwXkEyXkFqcGc@._V1_.jpg" },
  { "title": "Bahubali 2: The Conclusion", "year": "2017", "poster": "https://m.media-amazon.com/images/M/MV5BYjAwZWE2NmUtYjFjYy00Y2EyLTg4OTgtNmQ0NTQyY2M0NjE1XkEyXkFqcGc@._V1_.jpg" },
  { "title": "Kaho Naa... Pyaar Hai", "year": "2000", "poster": "https://m.media-amazon.com/images/M/MV5BNDUzNGRhMDAtYjk1Yy00OWFjLTgzNTYtYzFkYjcxMzhkYTQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { "title": "War", "year": "2019", "poster": "https://m.media-amazon.com/images/M/MV5BZGI0ZGQ3MTQtYjllYy00MTkyLTg4ZWUtOTc1MmI2ZDE4OTYyXkEyXkFqcGc@._V1_.jpg" }

];


// Favorites array
let favorites = [];

// Display all movies initially
displayMovies(movies);

// Search functionality
searchInput.addEventListener('keyup', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
  displayMovies(filtered);
});

// Display movies function
function displayMovies(moviesList) {
  moviesContainer.innerHTML = moviesList.map((movie, index) => `
    <div class="movie-card">
      <img src="${movie.poster}" alt="${movie.title}">
      <button class="favorite-btn" onclick="toggleFavorite(${index})">❤️</button>
      <div class="movie-card-content">
        <h3>${movie.title}</h3>
        <p>Release: ${movie.year}</p>
      </div>
    </div>
  `).join('');
}

// Toggle favorite
function toggleFavorite(index) {
  const movie = movies[index];
  const exists = favorites.find(f => f.title === movie.title);
  if(exists){
    favorites = favorites.filter(f => f.title !== movie.title);
    alert(`${movie.title} removed from favorites`);
  } else {
    favorites.push(movie);
    alert(`${movie.title} added to favorites`);
  }
  console.log("Favorites:", favorites);
}
  const toggleBtn = document.getElementById('dark-mode-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text
    if(document.body.classList.contains('dark-mode')){
      toggleBtn.textContent = ' Light Mode';
    } else {
      toggleBtn.textContent = ' Dark Mode';
    }
  });