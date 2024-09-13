const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    if (str.length > 0) {
        results = fruit.filter(item => {
            return item.toLowerCase().includes(str.toLowerCase());
        });
    }

	return results;
}

function searchHandler(e) {
	// TODO
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results);
}

function showSuggestions(results, inputVal) {
	// TODO
    suggestions.innerHTML = '';
    results.forEach((fruit) => {
        const li = document.createElement('li');
        li.innerHTML = `${fruit}`;
        suggestions.appendChild(li);
    })
    if (results.length > 0) {
        suggestions.parentElement.classList.add('has-suggestions');
    } else {
        suggestions.parentElement.classList.remove('has-suggestion');
    }
}

function useSuggestion(e) {
	// TODO
    if (e.target.tagName === 'LI') {
        const text = e.target.textContent;
        input.value = text;
        suggestions.innerHTML = '';
    };
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);