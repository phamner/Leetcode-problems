// Object-Oriented JavaScript: Deck of Cards  (refresher)
//  https://wsvincent.com/javascript-object-oriented-deck-cards/




class Deck {
    constructor(){
        this.deck = [];

        const suits = ['hearts','spades','clubs','diamonds'];
        const values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < values.length; j++) {
                this.deck.push(`${values[j]} of ${suits[i]}`)
            }
        }
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
    deal(){
        return this.deck.pop()
    }
    reset(){
        this.deck = [];
        const suits = ['hearts','spades','clubs','diamonds'];
        const values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < values.length; j++) {
                this.deck.push(`${values[j]} of ${suits[i]}`)
            }
        }

    }
}

let freshDeck = new Deck();

console.log(freshDeck.deck);
freshDeck.shuffle();
console.log(freshDeck.deck);
freshDeck.deal();
console.log(freshDeck.deck);

