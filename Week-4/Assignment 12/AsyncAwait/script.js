async function getExchangeRate(currencyCode) {
    try {
      // Make the API request to get the latest exchange rates
      const response = await fetch('https://api.exchangerate.host/latest');
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
  
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      if (data.rates && currencyCode in data.rates) {
        // Round the exchange rate to 4 decimal places
        const exchangeRate = parseFloat(data.rates[currencyCode]).toFixed(4);
        return exchangeRate;
      } else {
        return null; // Currency code not found in the response
      }
    } catch (error) {
      console.error('Error in getExchangeRate:', error);
      throw new Error('Error fetching exchange rates: ' + error.message);
    }
  }
  
  // Example usage:
  getExchangeRate('USD')
    .then((rate) => {
      console.log(rate); // Output: 1.2133 or an error message
    })
    .catch((error) => {
      console.error(error);
    });
  