class Cat {
    constructor(name) {
        this.name = name;
    }
    dance(style) {
        return `Meow, I am ${this.name}` + ` and I like to ${style}`
    }
}

const blue = {
    name: 'Blue',
    breed: 'Kitty Cat',
    dance: function(dance) {
        console.log('THIS IS: ', this);
        console.log(`Meow, I am ${this.breed} and I like to ${dance}!`)
    },
    play : function(...toys) {
        for (let toy of toys) {
            console.log(`${this.name} plays with ${toy} `);
        }
    },
    greet() {
        alert(`${this.name} SAYS MEOW!`)
    }
}
