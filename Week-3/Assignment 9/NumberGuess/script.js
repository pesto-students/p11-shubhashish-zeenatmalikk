function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;
    let userGuess;
  
    while (guessCount < totalGuesses) {
      userGuess = prompt(
        guessCount === 0
          ? "Enter a number between 1 and 100."
          : userGuess < numToGuess
          ? `${userGuess} is too small. Guess a larger number.`
          : `${userGuess} is too large. Guess a smaller number.`
      );
  
      // Check if the user pressed Cancel or closed the prompt
      if (userGuess === null) {
        return 0;
      }
  
      userGuess = parseInt(userGuess);
  
      // Check if the input is a valid number
      if (isNaN(userGuess)) {
        alert("Please enter a number.");
      } else {
        guessCount++;
  
        if (userGuess === numToGuess) {
          return guessCount;
        }
      }
    }
  
    return 0;
  }
  
  console.log(playGuessingGame(5));
  console.log(playGuessingGame(7, 3));
  