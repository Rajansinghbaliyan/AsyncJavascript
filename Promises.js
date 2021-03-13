// // const getYouADog = new Promise(((resolve, reject) => {
// //     if(Math.random() >0.5)
// //         resolve();
// //     else reject();
// // })).then(()=>{
// //     console.log('You get a Dog');
// // }).catch(()=>{
// //     console.log(':) No Dog');
// // })
// //
//
//
//
// // getYouADog.then(() =>{
// //     console.log('You get a Dog');
// // })
// // getYouADog.catch(() =>{
// //     console.log('BooooHOoo you will not get a Dog');
// // })
// //
//
// const getYouAGog = () => new Promise(((resolve, reject) => {
//     setTimeout(()=>{
//         if(Math.random() >0.5)
//             resolve();
//         else reject();
//     },2000);
// }));
//
//
// //After executing the promise the do different task
// //according to the result of the promise.
//
//
// getYouAGog().then(()=>{
//     console.log('You get a Dog');
// }).catch(()=>{
//     console.log(':) No Dog');
// });
//
//
// // const fakeRequest = (url) =>
// //     new Promise(((resolve, reject) => {
// //         setTimeout(()=>{ if(Math.random() > 0.9)
// //             resolve({status: 200 , message:'Request is successful'});
// //         else reject({ status: 404, message:'Server is down'},404)},3000);
// //
// //     }));
// //
// // fakeRequest('Google.com').then((value) => {
// //     console.log(value);
// // }).catch((reason,code) =>{
// //     console.log(reason);
// //     console.log(code);
// // })

const fakeRequest = (url) => new Promise(((resolve, reject) => {
    const pages = {
        '/users': [
            {id: 1, name: 'Bill'},
            {id: 5, name: 'James'}
        ],
        '/users/1': {
            id: 1,
            userName: 'Bill',
            upVotes: 367,
            city: 'Los Angeles',
            topPostId: 454321
        },
        '/users/5': {
            id: 5,
            userName: 'Bilbo',
            upVotes: 500,
            city: 'Washington'
        },
        '/posts/454321': {
            id: 454321,
            title: 'Success belongs to luck or hard work'
        },
        '/about': 'Something about the user'
    }

    const data = pages[url];
    if (data)
        resolve({status: 200, data});
    else reject({status: 400, data: 'No Page is found'});
}))


let url = '/users'


// fakeRequest(url)
//     .then((value) => {
//         console.log('Value from first request :')
//         console.log(value);
//         url +='/'+value.data[0].id;
//         fakeRequest(url)
//             .then((value) => {
//                 console.log('value from second request :');
//                 console.log(value.data);
//                 url = '/posts/'+ value.data['topPostId'];
//                 fakeRequest(url)
//                     .then((value) => {
//                         console.log('value from third request :');
//                         console.log(value);
//                     })
//                     .catch((reason) => {
//                         console.log('Reason from third request');
//                 })
//             })
//             .catch(reason => {
//                 console.log('Reason from second request');
//             })
//     }
//     )
//     .catch(reason => {
//         console.log('Reason from first request');
//     });

fakeRequest(url)
    .then(value => {
        console.log('Value from first request :')
        console.log(value);
        url += '/' + value.data[0].id;
        return fakeRequest(url);
    })
    .then((value) => {
        console.log('value from second request :');
        console.log(value.data);
        url = '/posts/' + value.data['topPostId'];
        return fakeRequest(url);
    })
    .then((value) => {
        console.log('value from third request :');
        console.log(value);
    }).catch(reason => {
        console.log(reason);
})


// setTimeout(()=>{
//     console.log(resultOfRequest);
//     },5000);


console.log('Hello');