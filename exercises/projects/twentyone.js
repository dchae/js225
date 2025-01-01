"use strict";

const rlsync = require("readline-sync");

class Card {
  static NUMBERS = new Set(new Array(52).keys());
  static RANKS = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  static SUITES = ["Clubs", "Diamonds", "Hearts", "Spades"];

  constructor(ord) {
    if (!Card.NUMBERS.has(ord)) {
      throw new RangeError("Card ordinal must be in range 0..52");
    }
    this.suite = Math.floor(ord / 13);
    this.rank = ord % 13;
  }

  get isAce() {
    return this.rank === 0;
  }

  get value() {
    return Math.min(this.rank + 1, 10);
  }

  toString() {
    return `[${Card.RANKS[this.rank]} of ${Card.SUITES[this.suite]}]`;
  }
}

class Deck {
  constructor() {
    this.cards = Array.from(Card.NUMBERS, (i) => new Card(i));
  }

  popRandom() {
    if (!this.cards.length) throw new RangeError("Cannot deal from empty deck");
    const i = Math.random() * this.cards.length;
    return this.cards.splice(i, 1)[0];
  }

  get status() {
    return `${this.cards.length}/${Card.NUMBERS.size}`;
  }
}

class Hand {
  constructor(hidden = false) {
    this.cards = [];
    this.hidden = hidden;
  }

  get lastCard() {
    if (!this.cards.length) throw RangeError("Hand is empty.");
    return this.cards.at(-1);
  }

  addCard(card) {
    this.cards.push(card);
  }

  toString() {
    if (this.hidden) return "[HIDDEN]";
    if (!this.cards.length) return "[EMPTY HAND]";
    return this.cards.map((card) => card.toString()).join(",\n");
  }

  unhide() {
    this.hidden = false;
  }
}

class Player {
  constructor(name = "Player") {
    this.name = name;
  }
}

class Dealer extends Player {
  constructor(name = "Dealer") {
    super(name);
  }
}

class TwentyOneGame {
  static WINDOW_WIDTH = 30;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.player.hand = new Hand();
    this.dealer = new Dealer();
    this.dealer.hand = new Hand(true);
    this.messages = [];
  }

  play() {
    this.displayWelcome();
    this.initialDeal();
    this.displayTable();
    this.playerMove();
    this.dealerMove();
    this.displayResult();
  }

  addMessage(msg) {
    this.messages.push(msg);
  }

  clearMessages() {
    this.messages.length = 0;
  }

  displayMessages() {
    console.log(this.messages.join("\n"));
    this.clearMessages();
  }

  displayWelcome() {
    console.clear();
    console.log("Welcome to TwentyOne!");
  }

  displayTable() {
    console.clear();

    const divider = "-".repeat(TwentyOneGame.WINDOW_WIDTH);
    const deckStr = `Deck: ${this.deck.status}`;
    const dealerHandStr = `${this.dealer.name}'s Hand: | (Total: ${this.handValue(this.dealer.hand)})\n${this.dealer.hand.toString()}`;
    const playerHandStr = `${this.player.name}'s Hand: | (Total: ${this.handValue(this.player.hand)})\n${this.player.hand.toString()}`;
    const tableElements = [deckStr, dealerHandStr, playerHandStr];
    console.log(tableElements.join(`\n${divider}\n`));
    console.log(divider);
    this.displayMessages();
    console.log(divider);
  }

  displayResult() {
    if (this.isBusted(this.player)) {
      console.log("Bust! You lose.");
    } else if (this.isBusted(this.dealer)) {
      console.log("Dealer bust! You win!");
    } else {
      const playerScore = this.calculateHandValue(this.player.hand);
      const dealerScore = this.calculateHandValue(this.dealer.hand);
      if (playerScore > dealerScore) {
        console.log("You win!");
      } else if (playerScore < dealerScore) {
        console.log("You lose!");
      } else {
        console.log("It's a tie!");
      }
    }
  }

  dealTo(player) {
    player.hand.addCard(this.deck.popRandom());
  }

  initialDeal() {
    for (let i = 0; i < 2; i++) this.dealTo(this.player);
  }

  handValue(hand) {
    if (hand.hidden) return `??`;
    return this.calculateHandValue(hand);
  }

  calculateHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand.cards) {
      value += card.value;
      aceCount += +card.isAce;
    }

    while (aceCount && value < 11) {
      value += 10;
      aceCount--;
    }

    return value;
  }

  isBusted(player) {
    return this.calculateHandValue(player.hand) > 21;
  }

  askChoice() {
    let choices = ["Hit", "Stay"];
    return rlsync.keyInSelect(choices, "Choose an option:", { cancel: false });
  }

  playerMove() {
    while (!this.isBusted(this.player)) {
      let stay = this.askChoice();
      if (stay) break;
      this.dealTo(this.player);
      this.addMessage(`You were dealt ${this.player.hand.lastCard}.`);
      this.displayTable();
    }
  }

  dealerMove() {
    this.dealer.hand.unhide();
    if (this.isBusted(this.player)) return;

    while (this.calculateHandValue(this.dealer.hand) < 17) {
      this.dealTo(this.dealer);
      this.addMessage(`Dealer was dealt ${this.dealer.hand.lastCard}.`);
    }
    this.displayTable();
  }
}

new TwentyOneGame().play();
