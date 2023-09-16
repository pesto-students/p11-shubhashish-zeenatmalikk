function stringToSymbolIterator(arr) {
    function* symbolGenerator() {
      for (const str of arr) {
        yield Symbol(str); 
      }
    }
  
    return symbolGenerator();
  }
  
  // Example usage:
  const inputArray = ['hello', 'world', 'test'];
  const symbolIterator = stringToSymbolIterator(inputArray);
  
  for (const symbol of symbolIterator) {
    console.log(symbol);
  }
  