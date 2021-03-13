// Using the setTimer()

console.log('I print First');
setTimeout(()=>{
    console.log('I print after 3 seconds');
},3000);
console.log('I print second');

setInterval(()=>{
    console.log('Waiting2');
},500);

setInterval(()=>{
    console.log('Wating');
},500);