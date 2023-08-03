// script.js
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const flag = document.getElementById('flag');

    data.forEach(country => {
      
      
      // Create an <img> element for each flag and append it to the container
      const flagImg = document.createElement('img');
      flagImg.src = country.flags.png;;
      flag.appendChild(flagImg);

      // Log the flag image URL to the console
      console.log(country.flags.png);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
