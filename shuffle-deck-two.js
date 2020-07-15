// Let’s implement a deck of playing cards in an object-oriented way with JavaScript. 
// Then we’ll add methods for additional functionality such as 
// a shuffle operation, a reset operation, and a deal operation that will return a random card and remove it from the deck.


class Deck {
    constructor(){
        this.deck = [];

        const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        const values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];


        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < values.length; j++) {
                this.deck.push(`${values[j]} of ${suits[i]}`)
            }
        }
    }
    display(){
        return this.deck;
    }
}

const freshyDeck = new Deck();

console.log(freshyDeck.deck)
