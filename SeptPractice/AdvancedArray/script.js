//forEach
let arr = [1, 2, 3, 4, 5];

function countZeroes(arr) {
    let total = 0;
    arr.forEach(function(val) {
        if(val === 0) {
            total++;
        }
    });
    return total;
}

function ageRange(arr) {
    arr.forEach(function(val) {
        if (val < 13) {
            console.log ("Person is a child.");
        } else if (val > 13 && val <= 19) {
            console.log ("Person is a teenager.");
        } else {
            console.log ("Person is an adult.");
        };
    })
}

function nameLength (arr) {
    arr.forEach(function(val) {
        console.log(`Name:${val}, Length:${val.length}`)
    })
};

function dollarToEuro (arr) {
    arr.forEach(function(val) {
        let euro = val * 0.85;
        console.log(euro, ' euros');
    })
};

//map Method

function fahrenheit(arr) {
    return arr.map(function(val) {
       return (val * 9/5) + 32;
    })
} 

function products(arr) {
    return arr.map(function(val) {
        return val.toUpperCase();
    });
}

const urls = Array.from(document.querySelectorAll('a'));
const links = urls.map(function(val) {
    return val.href;
})

//filter

function evensOnly(arr) {
    return arr.filter(function(val) {
        return (val % 2 === 0)
    })
}

function moreThanFiv(arr) {
    return arr.filter(function(val) {
        return val.length > 5;
    })
};

//some

function greaterThan (arr) {
    return arr.some(function(val) {
        return val > 100;
    })
};

function shoppingCart (arr) {
    return arr.some(function(val) {
        return val === 'apple';
    });
}

