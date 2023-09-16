// Create the game object
const game = {
    lives: 3,
    coins: 0,
  
    // Getter for points
    get points() {
      return this.coins * 10;
    },
  
    // Method to subtract 1 from lives if lives is greater than 0
    playerDies() {
      if (this.lives > 0) {
        this.lives -= 1;
      }
    },
  
    // Method to start a new game by resetting lives and coins
    newGame() {
      this.lives = 3;
      this.coins = 0;
    },
  };
  
  // Test the game object
  console.log("lives =", game.lives);
  console.log("coins =", game.coins);
  console.log("points =", game.points);
  
  game.coins = 2;
  console.log("points =", game.points);
  
  game.playerDies();
  console.log("lives =", game.lives);
  
  game.playerDies();
  console.log("lives =", game.lives);
  
  game.playerDies();
  console.log("lives =", game.lives);
  
  game.newGame();
  console.log("lives =", game.lives);
  console.log("coins =", game.coins);
  