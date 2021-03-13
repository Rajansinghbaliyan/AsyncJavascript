//Xmlhttp

const url = 'https://swapi.dev/api/planets/';

// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const firstReq = new XMLHttpRequest();
//
// firstReq.addEventListener("load",function () {
//     const data = JSON.parse(this.responseText);
//     //console.log(data);
//     const filmUrl = data.results[0].films[0];
//     console.log(data.results[0].films[0]);
//
//
//     const secondReq = new XMLHttpRequest();
//     secondReq.addEventListener("load", function () {
//         console.log('Film Request');
//         const data = JSON.parse(this.responseText);
//         console.log(data)
//     });
//     secondReq.addEventListener("error", ()=>{
//         console.log('Error');
//     });
//     secondReq.open('GET', filmUrl);
//     secondReq.send();
//
//
//     const planetsName = data.results.map((value => {
//        return {
//            name: value.name,
//            climate: value.climate,
//            terrain: value.terrain
//        }
//     }));
//     //console.log(planetsName);
// });
//
// firstReq.addEventListener("error", () => {
//     console.log('Error!!!');
// });
// firstReq.open('Get', url);
// firstReq.send();


const fetch = require('node-fetch');

// fetch(url)
//     .then(response => {
//         if (response.status !== 200) {
//             throw new Error(response);
//         }
//         return response.json();
//     })
//     .then(data => {
//         //console.log(data.results);
//         const planetName = data.results.map(planet => planet.name);
//         console.log(planetName);
//         filmUrl = data.results[0].films[0];
//         return fetch(filmUrl);
//     })
//     .then(response => {
//         if (response.status !== 200) {
//             console.log('Problem', response.status);
//             return;
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Something went wrong with fetch');
//         console.log(err)
//     })
// console.log('Hello');
//
// let filmData = [];
// let isPagesLeft = true;
// const allBundle = (value) => {
//     let dataValue = '';
//     fetch(value)
//         .then(response => {
//             if (response.status !== 200) {
//                 isPagesLeft = false;
//                 console.log('Problem', response.status);
//                 return;
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             return data;
//         })
//         .catch(err => {
//             console.log('Something went wrong');
//         })
//
//  }

//let peopleUrl = '';

//let x = 1;
//
// setInterval(() => {
//     if (isPagesLeft) {
//         peopleUrl = `https://swapi.dev/api/people/${x++}/`;
//         allBundle(peopleUrl);
//     }
// }, 20)
//
// setTimeout(() => {
//
//     const maleCharacter = filmData.filter(people => people.gender === 'male').sort((a, b) => b.height - a.height);
//     const femaleCharacter = filmData.filter(people => people.gender === 'female').sort((a, b) => b.height - a.height);
//     const biSexcualCharacter = filmData.filter(people => people.gender === 'n/a').sort((a, b) => b.height - a.height);
//     console.log(femaleCharacter, femaleCharacter.length);
//     console.log(biSexcualCharacter, biSexcualCharacter.length);
//     console.log(maleCharacter, maleCharacter.length);
// }, 15000);
//


// const moodle = (value) => {
//     let dataValue = '';
//     fetch(value)
//         .then(response => {
//             if (response.status !== 200) {
//                 isPagesLeft = false;
//                 console.log('Problem', response.status);
//                 return;
//             }
//             console.log(response);
//             return response
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(() => {
//
//         })
// };
//
// setInterval(() => {
//     moodle('http://lms.kiet.edu/moodle/course/view.php?id=62');
// }, 100);

const allPlanet = [];
let x = 1;
let status = true;
const planetBundle = (url) =>{
    fetch(url)
        .then(response =>{
            if(response.status !== 200){
                console.log('Problem',response.status);
                status = false;
                throw new Error();
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
            if(status) {
                url = `http://swapi.dev/api/planets/?page=${++x}`;
                allPlanet.push(data);
                planetBundle(url);
            }
        })
        .catch(()=>{
            console.log('entered the final block');
            console.log(allPlanet);
            const allPlanetsName = allPlanet.map(planets => {
                return planets.results.map(planet => planet.name);
            });
            console.log(allPlanetsName);
           const singlePlanetsArray = allPlanetsName.reduce((planets,tenPlanet)=>{
               for(let x of tenPlanet)
                   planets.push(x);
               return planets;
           },[]);
            console.log(singlePlanetsArray,singlePlanetsArray.length);
        })

}

//planetBundle(url);

const allVehicles = [];
x =1;
status = true;
let vehiclesUrl = 'http://swapi.dev/api/vehicles/';
const filmBundle = (url) =>{
    fetch(url)
        .then(response => {
            if (response.status !== 200){
                console.log('Problem',response.status);
                throw new Error();
            }
            return response.json();
        })
        .then(data =>{
            if(status){
                console.log(data);
                allVehicles.push(data);
                vehiclesUrl = `http://swapi.dev/api/vehicles/?page=${++x}`;
                filmBundle(data.next);
            }
        })
        .catch(()=>{
            //console.log(allVehicles);
            // const data = allVehicles.reduce((allSimplifiedVehicles,pages)=>{
            //     for (let vehicle of pages.results){
            //             allSimplifiedVehicles[vehicle.name] = {
            //                 name: vehicle.name,
            //                 model: vehicle.model,
            //                 manufactures: vehicle.manufacturer,
            //                 length: vehicle.length,
            //                 crew: vehicle.crew,
            //                 passengers: vehicle.passengers
            //             }
            //         }
            //     return allSimplifiedVehicles;
            // },{})

            const data = allVehicles.reduce((allSimplifiedVehicles,pages)=>{
                for (let vehicle of pages.results){
                    allSimplifiedVehicles.push({
                        name: vehicle.name,
                        model: vehicle.model,
                        manufactures: vehicle.manufacturer,
                        length: vehicle.length,
                        crew: vehicle.crew,
                        passengers: vehicle.passengers
                    });
                }
                return allSimplifiedVehicles;
            },[])

            const vehiclesSorted = data.sort((a, b) => b.length - a.length);
            //console.log(vehiclesSorted);
        })
}

filmBundle(vehiclesUrl);