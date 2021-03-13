// const greet = () => {
//     return Promise.resolve("hello");
// }
//
// greet()
//     .then(data =>{
//         console.log(data);
//     });

//Same work could be done with async function


async function willYouGetADog() {
    if (Math.random() > 0.5)
        return 'You will get a DOg.'
    else
        throw "Nope No Dog";

}


willYouGetADog()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })


const axios = require('axios').default;

const planetUrl = 'https://swapi.dev/api/planets/';


// async function getPlanets(url = planetUrl){
//
//     const res = await axios.get(url);
//     if(res.data.next === null)
//         throw ('No Planet Left');
//     else {
//         console.log(res.data);
//         getPlanets(res.data.next);
//     }
//
// }
//
// getPlanets()
//     .catch(err =>{
//         console.log("Error");
//     });

async function getPlanets(url = planetUrl) {
    try {
        const res = await axios.get(url);
        if (res.data.next === null)
            throw ('No Planet Left');
        else {
            console.log(res.data);
            getPlanets(res.data.next);
        }
    } catch (e) {
        console.log('IN catch', e)
    }

}

//getPlanets();
const fs = require('fs')

let x =0;
// async function allPokemon(url = 'https://pokeapi.co/api/v2/pokemon/1') {
//     try {
//         const res = await axios.get(url);
//         console.log(res.data);
//         const data = res.data;
//         const simplePokemon = {
//             name: data.name,
//             height: data.height,
//             weight: data.weight,
//             types: data.types.reduce((allTypes,type)=>{
//                 allTypes.push(type.type.name);
//                 return allTypes;
//             },[]),
//             order: data.order
//         }
//         fs.appendFile('pokemon.txt', JSON.stringify(simplePokemon)+"\n", (err) => {
//             if (err) throw err;
//             console.log('Saved!');
//         })
//         let nextUrl =`https://pokeapi.co/api/v2/pokemon/${++x}`;
//         allPokemon(nextUrl);
//
//     } catch (e) {
//         console.log("Error", e);
//     }
// }

async function allPokemon(url = 'https://pokeapi.co/api/v2/pokemon/1') {
    try {
        const res = await axios.get(url);
        console.log(res.data);
        const data = res.data;
        const simplePokemon = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.reduce((allTypes,type)=>{
                allTypes.push(type.type.name);
                return allTypes;
            },[]),
            order: data.order
        }
        fs.appendFileSync('pokemon.txt', JSON.stringify(simplePokemon)+"\n", (err) => {
            if (err) throw err;
            console.log('Saved!');
        })


    } catch (e) {
        console.log("Error", e);
    }
}


setInterval(()=>{
    let nextUrl =`https://pokeapi.co/api/v2/pokemon/${++x}`;
    allPokemon(nextUrl);
},50)
