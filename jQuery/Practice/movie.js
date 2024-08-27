//give to new movie 
let currentId = 0;

//list of all movies in memory for sorting 

let moviesList = [];

//sorting order

let isTitleAscending = true;
let isRatingAscending = true;

//functions for submit/delete buttons
$(function () {
    //handle form submission
    $('#movie-input').on('submit', function(e) {
        e.preventDefault();

        //get movie and rating values
        const title = $('#movie').val();
        const rating = $('#rating').val();

        //Validate the title and rating values
        if (title.length < 2) {
            alert('Title has to be longer than 2 characters');
            return;
        }
        if(rating < 1 || rating > 10) {
            alert('Rating has to be between 1 to 10');
            return;
        }        
        //Increment currentId for each new movie
        currentId ++;
        //create a movie object
        const movie = {
            id: currentId,
            title: title,
            rating: rating
        }
        //add movie to DOM
        moviesList.push(movie);

        //append movie to the DOM
        const movieHTML = `
        <tr id='${movie.id}'>
            <td>${movie.title}</td>
            <td>${movie.rating}</td>
            <td><button class='delete-btn'>Delete</button></td>
        </tr>
        `;
        $('#movie-table').append(movieHTML);
        //clear input fields
        $('#movie').val('');
        $('#rating').val('');
    });
    
    // Handle delete button click
    $('#movie-table').on('click', '.delete-btn', function() {
        const movieId = $(this).closest('tr').attr('id');

        // Remove movie from the DOM
        $(this).closest('tr').remove();
        // Remove movie from moviesList array
        moviesList = moviesList.filter(movie => movie.id != movieId);
    });
      

    // Sorting functionality
    $('#sorting-title').on('click', function() {
        moviesList.sort((a,b) => {
            return isTitleAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        });
        isTitleAscending = !isTitleAscending;
        renderMovies();
    })
    $('#sorting-rating').on('click', function() {
        moviesList.sort((a,b) => {
            return isRatingAscending ? a.rating - b.rating : b.rating - a.rating;   
           });
        isRatingAscending = !isRatingAscending;
        renderMovies();
    })

    // Function to render the sorted movie list
    function renderMovies() {
        $('#movie-table').empty();
        for (let movie of moviesList) {
            const movieHTML = `
            <tr id='${movie.id}'>
            <td>${movie.title}</td>
            <td>${movie.rating}</td>
            <td><button class='delete-btn'>Delete</button></td>
        </tr>
        `;
        $('#movie-table').append(movieHTML)
        }
    }
})

