function calcWordFrequencies() {
    const input = prompt("Enter a list of words (separated by spaces):");
    
    if (input === null || input.trim() === "") {
      console.log("No input provided. Exiting.");
      return;
    }
  
    const words = input.split(" ");
    const wordMap = new Map();
  
    // Count the frequency of each word
    words.forEach(word => {
      const lowercaseWord = word.toLowerCase(); // Convert to lowercase for case-insensitivity
      if (wordMap.has(lowercaseWord)) {
        wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
      } else {
        wordMap.set(lowercaseWord, 1);
      }
    });
  
    // Print the word frequencies
    wordMap.forEach((count, word) => {
      console.log(`${word} ${count}`);
    });
  }
  
  // To test the function, call it from the JavaScript console
  calcWordFrequencies();
  