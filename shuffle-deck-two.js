// Let’s implement a deck of playing cards in an object-oriented way with JavaScript. 
// Then we’ll add methods for additional functionality such as 
// a shuffle operation, a reset operation, and a deal operation that will return a random card and remove it from the deck.


class Deck {
    constructor(){
        this.deck = [];

        this.suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        this.values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];


        for (var i = 0; i < this.suits.length; i++) {
            for (var j = 0; j < this.values.length; j++) {
                this.deck.push(`${this.values[j]} of ${this.suits[i]}`)
            }
        }
    }
    display(){
        return this.deck;
    }
    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
      
        return this;
    }
    reset(){
        this.deck = [];
        for (var i = 0; i < this.suits.length; i++) {
            for (var j = 0; j < this.values.length; j++) {
                this.deck.push(`${this.values[j]} of ${this.suits[i]}`)
            }
        }
    }
    deal(){
        return this.deck.pop();
    }
}

const freshyDeck = new Deck();
freshyDeck.deal();
console.log(freshyDeck.deck.length)
