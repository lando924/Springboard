document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.querySelector(".memeform");
    const memeContainer = document.querySelector("#memeContainer")

    memeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //input values
        const url =  document.querySelector('#textInput').value;
        const top = document.querySelector('#topText').value;
        const bottom = document.querySelector('#bottomText').value;

        //Meme elements
        const memeDiv = document.createElement('div');
        const memeImg = document.createElement('img');
        const topTextDiv = document.createElement('div');
        const bottomTextDiv = document.createElement('div');

        //validation
        if(!top || !bottom || !url) {
            alert("Please fill in all fields.");
            return;
        }

        //Image source
        memeImg.src = url;

        //Set text content
        topTextDiv.innerText = top;
        bottomTextDiv.innerText = bottom;

        //Add classes for styling
        memeDiv.classList.add('meme');
        topTextDiv.classList.add('top-text');
        bottomTextDiv.classList.add('bottom-text');

        //Append elements to meme container
        memeDiv.appendChild(memeImg);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeContainer.appendChild(memeDiv);

        //Delete Button
        memeDiv.addEventListener('mouseover', function() {
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete-button');
            memeDiv.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                memeContainer.removeChild(memeDiv)
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

