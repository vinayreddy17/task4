fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        console.log(country.name.official);
        console.log(country.region);
        console.log(country.subregion);
            console.log(country.population);
            console.log("*=============================*")
    })
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
