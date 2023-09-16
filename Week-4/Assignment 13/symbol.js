let transactionCounter = 0;

/**
 * @returns {Symbol}
 */
function generateTransactionId() {
  transactionCounter++;

  const transactionIdString = `TRANSACTION_ID_${transactionCounter}`;

  const transactionIdSymbol = Symbol(transactionIdString);

  return transactionIdSymbol;
}

// Example usage:
const transaction1 = generateTransactionId();
console.log(transaction1); 

const transaction2 = generateTransactionId();
console.log(transaction2); 

const transaction3 = generateTransactionId();
console.log(transaction3); 
