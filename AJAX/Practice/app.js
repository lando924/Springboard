// async function getData() {
//     const response = await axios.get('https://swapi.dev/api/planets/')
//     const { next, results } = response.data;
//     console.log(next);
//     for (let planet of response.data.results) {
//         console.log(planet.name)
//     }
//     const response2 =  await axios.get(next);
//     const results2 = response2.data.results;
//     for (let planet of results2) {
//         console.log(planet.name)
//     }
// }


// getData();
// console.log("I HAPPEN AFTER getData()");


//making request, manipulating DOM with requests
// async function getLaunches() {
//     const res = await axios.get('https://api.spacexdassta.com/v3/launches/upcoming');
//     renderLaunches(res.data)
    
// }

// function renderLaunches(launches) {
//     const ul = document.querySelector('#launches');
//     for (let launch of launches) {
//         ul.append(makeLaunchLI(launch));
//     }
// }

// function makeLaunchLI(launch) {
//     const newLI = document.createElement('LI');
//     const mission = document.createElement('B');
//     mission.innerText = launch.mission_name;
//     newLI.append(mission);
//     newLI.innerHTML += `${launch.rocket.rocket_name}`;
//     return newLI;
// }

// const btn = document.querySelector('#getLaunches');
// btn.addEventListener('click', getLaunches);


//Dog API Try/Catch, ASYNC AWAIT
// async function getRandomDog() {
//     const res = await axios.get('https://dog.ceo/api/breeds/images/random');
//     console.log(res.data);
//     const img = document.querySelector('#dog')
//     img.src = res.data.message;
// }

// async function getDogByBreed(breed) {
//     try {
//         const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//         const res = await axios.get(url);
//         const img = document.querySelector('#dog');
//         img.src = res.data.message;
//     } catch (e) {
//         console.log(e);
//         alert('BREED NOT FOUND!');
//     }
// };

// const form = document.querySelector('#searchform');
// const input = document.querySelector('#search');

// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     getDogByBreed(input.value);
//     input.value = '';
// })

//Post Request with Dummy API
// async function getUsers() {
//     const res = await axios.get('https://reqres.in/api/users');
//     console.log(res);
// }

// async function createUser() {
//     const res = await axios.post('https://reqres.in/api/users', {username: 'ButtersTheChicken', email: 'butters@gmail.com', age: 1})
//     console.log(res);
// }

// createUser();

//hackorsnooze API Post Example

async function getUsers(token) {
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {params: { token } });
    console.log(res);
};
//gives us token
async function signUp(username, password, name) {
    try {
        const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { 
            user: { name, username, password } 
        });
        console.log('User signed up successfully:', res.data);
    } catch (error) {
        if (error.response && error.response.status === 409) {
            console.log('Username already exists. Please choose a different username.');
        } else {
            console.log('An error occurred:', error.message);
        }
    }
}
//token back
async function login(username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user: {username, password } })
    console.log(res);
    return res.data.token;
}


async function getUsersWithAuth() {
    const token = await login('lando9024', 'KatyLadyBaby2024');
    getUsers(token);
}

async function createStory() {
    const token = await login('lando9024', 'KatyLadyBaby2024');
    const newStory = {
        token,
        story: {
            author: 'Katy',
            title: 'Bark Bark Bark',
            url: 'http://chickens4lyfe.com'
        }
    }
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res);
}

createStory();
// getUsersWithAuth();
//my fake account
// login('lando9024', 'KatyLadyBaby2024');

