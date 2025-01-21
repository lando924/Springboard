$('#new-cupcake').on('submit', submitForm);
$('#cupcakes-container').on('click', '.fa-solid', deleteCupcake)

const cupcakes = $('#cupcakes-container');
const base_url = 'http://127.0.0.1:5000/api'

function cupcakeHTML(cupcake) {
    return `<div class="cupcake" data-id="${cupcake.id}">
                <img src="${cupcake.image}" alt="">
                <p>${cupcake.size} ${cupcake.flavor} cupcake (${cupcake.rating}/10) <i class="fa-solid fa-trash-can"></i></p>
            </div>`
}

async function showCupcakes() {
    const resp = await axios.get(`${base_url}/cupcakes`)

    for (let cup of resp.data.cupcakes) {
        let cupElement = $(cupcakeHTML(cup));
        cupcakes.append(cupElement);
    }
}


async function submitForm(e) {
    e.preventDefault();
    let flavor = $('#flavor').val();
    let size = $('#size').val();
    let rating = $('#rating').val();
    let link = $('#image').val();

    const postCupcake = await axios.post(`${base_url}/cupcakes`,
        {"flavor":flavor , "size":size, "rating":rating, "image":link});

    let cupElement = $(cupcakeHTML(postCupcake.data.cupcake));
    cupcakes.append(cupElement);
    $('#new-cupcake')[0].reset()
}

async function deleteCupcake(e) {
    e.preventDefault();
    let $cup = $(e.target).parent().parent();
    cid = $cup.attr('data-id')

    const del = await axios.delete(`${base_url}/cupcakes/${cid}`);
    $cup.remove();
}

showCupcakes(); 