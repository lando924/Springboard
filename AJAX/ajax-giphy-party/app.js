const $gifArea = $('#gif-area');
const $searchInput = $('#searchInput');

//add gif to area
function searchGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

//form submission clear search box and make ajax call
$("form").on('submit', async function(e) {
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val('');


  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "KpdzqBRjVc5DYSoaaiclAeSif45MkJoo"
    }
  });
  searchGif(response.data);
});



//Remove gifs
$('#removeGIF').on('click', function() {
    $gifArea.empty();
});
