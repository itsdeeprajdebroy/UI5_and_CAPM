// creating a game
const events = require('events');
const utils = require('util');


class Pokemon extends events.EventEmitter {
    constructor(name){
        super()
        this.name = name;
    }
};

//Todo: Important add event handler capabilities to the class 
// utils.inherits(Pokemon, events.EventEmitter);


// easy way to create a class
// var Pokymon = function(name){
//     this.name = name;
// };


//creating object of class
const Raichu = new Pokemon('raichu');
const Pikachu = new Pokemon('pikachu');

// creating a array
const aPokemon = [Raichu, Pikachu];

aPokemon.forEach((each) => {
    each.on('jump', (length) => {
        console.log(each.name + " is jumped " + length + " km");
    })
})


Pikachu.emit('jump', 20);
Raichu.emit('jump', 15);
















// // event module is a inbuild part in node js
// const events = require('events');

// // creating eventemiter object
// const eventObject = new events.EventEmitter();

// // attaching event handler function or registaring
// eventObject.on('jump', function () {
//     console.log("Yes jumped");
// })

// // occuring of event, event listner
// eventObject.emit('jump');