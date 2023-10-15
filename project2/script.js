// Replace 'YOUR_API_KEY' with your actual OMDB API key
const apiKey = 'b725e2b4';
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const movieInfo = document.getElementById('movieInfo');



searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') return; // Don't make an empty search

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const movies = data.Search;
                if (movies && movies.length > 0) {
                    let movieHTML = '<h2>Search Results:</h2>';
                    movieHTML += '<div class="movie-list">';
                    movies.forEach(movie => {
                        movieHTML += `
                            <div class="movie">
                                <h3>${movie.Title}</h3>
                                <img src="${movie.Poster}" alt="${movie.Title}">
                                <p>Year: ${movie.Year}</p>
                            </div>
                        `;
                    });
                    movieHTML += '</div>';
                    movieInfo.innerHTML = movieHTML;
                } else {
                    movieInfo.innerHTML = '<p>No movies found.</p>';
                }
            } else {
                movieInfo.innerHTML = '<p>An error occurred.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            movieInfo.innerHTML = '<p>An error occurred.</p>';
        });
});

