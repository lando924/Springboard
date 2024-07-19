

//submit the form
//retrieve values before getting anything else done
//console.log values first to make sure I'm getting the correct values


//generate the meme with the inputs of the forms
//delete the memes
//reset the forms



document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.querySelector('.memeForm');
    const memeContainer = document.querySelector('#meme-container');

    memeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Input values
        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imgUrl = document.getElementById('textInput').value;

        // Meme elements
        const memeDiv = document.createElement('div');
        const memeImage = document.createElement('img');
        const topTextDiv = document.createElement('div');
        const bottomTextDiv = document.createElement('div');

        //validation
        if (!topText || !bottomText || !imgUrl) {
            alert("Please fill in all fields.");
            return;
        }

        // Image source
        memeImage.src = imgUrl;

        // Set text content
        topTextDiv.innerText = topText;
        bottomTextDiv.innerText = bottomText;

        // Add classes for styling
        memeDiv.classList.add('meme');
        topTextDiv.classList.add('top-text');
        bottomTextDiv.classList.add('bottom-text');

        // Append elements to meme container
        memeDiv.appendChild(memeImage);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeContainer.appendChild(memeDiv);

        // Delete button
        memeDiv.addEventListener('mouseenter', function() {
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete-button');
            memeDiv.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                memeContainer.removeChild(memeDiv);
            });
        });

        // Remove delete button when mouse leaves the meme
        memeDiv.addEventListener('mouseleave', function() {
            const deleteButton = memeDiv.querySelector('.delete-button');
            if (deleteButton) {
                memeDiv.removeChild(deleteButton);
            }
        });
        memeForm.reset();
    });
});



