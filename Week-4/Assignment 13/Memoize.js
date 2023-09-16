function createTemperatureCache() {
    const cache = {};
  
    function getTemperatureForCity(city) {
      if (cache.hasOwnProperty(city)) {
        console.log(`Retrieved ${city} temperature from cache`);
        return cache[city];
      } else {
        if (temperatureData.hasOwnProperty(city)) {
          cache[city] = temperatureData[city];
          console.log(`Fetched ${city} temperature and cached it`);
          return temperatureData[city];
        } else {
          console.log(`City ${city} not found in temperatureData`);
          return 'City not found';
        }
      }
    }
  
    return getTemperatureForCity;
  }
  
  const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  const getTemperatureForCity = createTemperatureCache();
  
  const temperature1 = getTemperatureForCity('New York');
  console.log(temperature1);
  
  const temperature2 = getTemperatureForCity('New York');
  console.log(temperature2); 
  
  const temperature3 = getTemperatureForCity('London');
  console.log(temperature3);
  
  const temperature4 = getTemperatureForCity('London');
  console.log(temperature4); 
  
  const temperature5 = getTemperatureForCity('Dubai');
  console.log(temperature5); 
  