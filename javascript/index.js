async function getData(){
    return "HI";
}
const dataPromise= getData();
console.log(dataPromise);

dataPromise.then((res)=>console.log(res));

// Example 2;

const p1 = new Promise((resolve,reject)=>{
    resolve("HI Nitheesh Prabhu");
})

async function getData(){
    return p1;
}

const dataPromis = getData();
console.log(dataPromise);
dataPromis.then((res)=>console.log(res));

// using Async and await.........................................................................................................
// It is a normal promise function.............................................................
const p = new Promise((resolve,reject)=>{
    resolve("HI")
});

function getData(){
    p.then((res)=>console.log(res))
}
getData();

//using Async and await.................................................................
const n = new Promise ((resolve,reject)=>{
    resolve("using await")
});

async function handlePromise(){
    const val = await n;
    console.log(val)
}
handlePromise();

// using Async and await with setTimeout;............................................................................
const k = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("using set time out function to see how it will work.")
    },10000)
})

async function handlePromise(){
    const val = await k;
    console.log(val)
}
handlePromise();