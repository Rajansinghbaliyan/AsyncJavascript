const axios = require('axios').default;

const planetUrl = 'https://swapi.dev/api/planets/';

const allPlanets = (url) =>{
    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(data);
            allPlanets(data.next);
        })
        .catch(err =>{
            console.log('Something went wrong',err);
        })
}

allPlanets(planetUrl);