document.addEventListener('DOMContentLoaded', function () {
    //form
    const submit = document.querySelector('#formSubmit');
    const form = document.querySelector('#memeForm');

    //divspace
    const memeSpace = document.querySelector('.memeSpace');

    //Submit Function

    memeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        //inputs
        const urlInput = document.querySelector('#urlInput');
        const topInput = document.querySelector('#topInput');
        const bottomInput = document.querySelector('#bottomInput');

        const imageUrl = urlInput.value;
        const topText = topInput.value;
        const bottomText = bottomInput.value;
        
        //meme elements
        const memeDiv = document.createElement('div');
        const memeImg = document.createElement('img');
        const topTextDiv = document.createElement('div');
        const bottomTextDiv = document.createElement('div');

        //validation
        if (!topText || !bottomText || !imageUrl) {
            alert("Please fill out all fields.");
            return;
        }

        //Image source
        memeImg.src = imageUrl;

        //set text content
        topTextDiv.innerText = topText;
        bottomTextDiv.innerText = bottomText;

        //Add classes for styling
        memeDiv.classList.add('meme');
        topTextDiv.classList.add('top-text');
        bottomTextDiv.classList.add('bottom-text');

        //Append elements to meme container
        memeDiv.appendChild(memeImg);
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeSpace.appendChild(memeDiv);

        //Delete button
        memeDiv.addEventListener('mouseenter', function() {
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete-button');
            memeDiv.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                memeSpace.removeChild(memeDiv);
            })
        })

        //Remove delete button when mouse leave the meme
        memeDiv.addEventListener('mouseleave', function() {
            const deleteButton = memeDiv.querySelector('.delete-button');
            if(deleteButton) {
                memeDiv.removeChild(deleteButton);
            }
        })
        memeForm.reset();
    })
})
    