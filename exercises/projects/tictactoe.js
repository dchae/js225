"use strict";

/*
Objects:
Board
Square
Player

- play
- mark
*/

const rlsync = require("readline-sync");

class Board {
  static MARKER_X = "X";
  static MARKER_O = "O";
  static MARKER_EMPTY = "_";

  constructor(size = 3, paddingY = 1, paddingX = 2) {
    this.size = size;
    this.squares = new Array(size ** 2)
      .fill(Board.MARKER_EMPTY)
      .map((_, i) => i);
    this.paddingY = paddingY;
    this.paddingX = paddingX;
  }

  get width() {
    return this.#emptyRow.length;
  }

  get squareWidth() {
    return this.paddingX * 2 + 1;
  }

  get rows() {
    return [...new Array(this.size).keys()].map((y) =>
      this.squares.slice(y * this.size, (y + 1) * this.size),
    );
  }

  get columns() {
    return [...new Array(this.size).keys()].map((x) =>
      this.squares.filter((_, i) => i % this.size === x),
    );
  }

  get diagonals() {
    const primary = [...new Array(this.size).keys()].flatMap((i) =>
      this.squares.filter((_, j) => j === i * (this.size + 1)),
    );

    const secondary = [...new Array(this.size).keys()].flatMap((i) =>
      this.squares.filter((_, j) => j === (i + 1) * (this.size - 1)),
    );

    return [primary, secondary];
  }

  get freeSquares() {
    return [...this.squares.keys()].filter(
      (i) =>
        this.squares[i] !== Board.MARKER_O &&
        this.squares[i] !== Board.MARKER_X,
    );
  }

  get #emptyRow() {
    return new Array(this.size).fill(" ".repeat(this.squareWidth)).join("|");
  }
  get #horizontalDivider() {
    return new Array(this.size).fill("-".repeat(this.squareWidth)).join("+");
  }

  #padRow(row) {
    const rowPadding = new Array(this.paddingY).fill(this.#emptyRow);
    const paddedRow = row
      .map((square) =>
        square
          .toString()
          .padStart(this.paddingX + 1)
          .padEnd(this.paddingX * 2 + 1),
      )
      .join("|");
    return [rowPadding, paddedRow, rowPadding].join("\n");
  }

  update(marker, squareID) {
    this.squares[squareID] = marker;
  }

  isFull() {
    return this.freeSquares.length === 0;
  }

  getSquare(id) {
    return this.squares[id];
  }

  toString() {
    return this.rows
      .map((row) => this.#padRow(row))
      .join(["\n", "\n"].join(this.#horizontalDivider));
  }
}

class Player {
  constructor(marker, name = "Player") {
    this.name = name;
    this.marker = marker;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }
}

class ComputerPlayer extends Player {
  constructor(marker, name = "Computer") {
    super(marker, name);
    this.isComputer = true;
  }
}

class Game {
  #messages;
  static SCORE_TO_WIN = 3;

  constructor() {
    this.resetBoard();
    this.player = new Player(Board.MARKER_O);
    this.computer = new ComputerPlayer(Board.MARKER_X);
    this.#messages = [];
  }

  get winningLines() {
    return this.board.rows.concat(this.board.columns, this.board.diagonals);
  }

  get messages() {
    return this.#messages.slice(-2);
  }

  resetBoard() {
    this.board = new Board();
  }

  addMessage(msg) {
    this.#messages.push(msg);
  }

  clearMessages() {
    this.#messages.length = 0;
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Tic Tac Toe!`);
  }

  setPlayerName() {
    this.player.name = rlsync.question("What is your name?\n", {
      limit: /\w+/,
      limitMessage: "Invalid name.",
    });
    console.clear();
    rlsync.question(`Hi ${this.player.name}!\nPress ENTER to continue`);
  }

  move(player) {
    const choices = this.board.freeSquares;
    if (!choices.length) return;
    let choice;
    if (player.isComputer) {
      choice = this.getComputerChoice(choices);
    } else {
      choice = this.getUserChoice(choices);
    }

    this.board.update(player.marker, choice);
    this.addMessage(
      `${player.name} (${player.marker}) marked square ${choice}`,
    );
    this.draw();
  }

  getUserChoice(choices) {
    const limitMessage = `Invalid choice. Available squares: ${choices.join(", ")}`;
    return rlsync.question(`Choose a square: `, {
      limit: choices,
      limitMessage,
    });
  }

  getWinningSquares(player, squares) {
    return squares.filter((square) => {
      let winning = false;
      const old = this.board.getSquare(square);
      this.board.update(player.marker, square);
      if (this.isWinner(player)) {
        this.board.update(old, square);
        winning = true;
      }
      this.board.update(old, square);
      return winning;
    });
  }

  getComputerChoice(availableSquares) {
    let winningSquares = this.getWinningSquares(
      this.computer,
      availableSquares,
    );

    let losingSquares = this.getWinningSquares(this.player, availableSquares);
    let preferredSquares = winningSquares.concat(losingSquares);
    if (preferredSquares.length) return preferredSquares[0];
    if (availableSquares.includes(4)) return 4;
    return availableSquares[
      Math.floor(Math.random() * availableSquares.length)
    ];
  }

  isWinner(player) {
    return this.winningLines.some((line) =>
      line.every((square) => square === player.marker),
    );
  }

  displayWinner(winner) {
    if (winner) {
      if (winner === this.player) {
        console.log(`${this.player.name} wins!`);
      } else {
        console.log(`${this.computer.name} wins!`);
      }
    } else {
      console.log("It's a tie!");
    }

    this.clearMessages();
    this.displaySetScore();
    rlsync.question("Press ENTER to continue.");
  }

  displaySetScore() {
    console.log(`---Score---`);
    console.log(
      `${this.player.name}: ${this.player.score}\n${this.computer.name}: ${this.computer.score}`,
    );
  }

  displaySetWinner(lim = 3) {
    if (this.player.score === lim) {
      console.log(`${this.player.name} wins the set!`);
    } else {
      console.log(`${this.computer.name} wins the set!`);
    }
    console.log("Game over!");
  }

  draw() {
    console.clear();
    console.log(this.board.toString());
    console.log(".".repeat(this.board.width));
    console.log(this.messages.join("\n"));
    console.log(".".repeat(this.board.width));
  }

  startGame(player1, player2) {
    this.resetBoard();
    this.draw();

    let winner;
    while (!this.board.isFull()) {
      this.move(player1);
      if (this.isWinner(player1)) {
        winner = player1;
        break;
      }

      this.move(player2);
      if (this.isWinner(player2)) {
        winner = player2;
        break;
      }
    }

    winner?.incrementScore();
    this.displayWinner(winner);
  }

  play() {
    this.displayWelcomeMessage();
    this.setPlayerName();
    let players = [this.player, this.computer];

    while (players.every((p) => p.score < Game.SCORE_TO_WIN)) {
      this.startGame(...players);
      players.reverse();
    }

    this.displaySetWinner();
  }
}

new Game().play();
