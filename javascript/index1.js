// //diving deep into a async and await.
// //using normal promise method..........................................
// const m= new Promise((resolve,reject)=>{
//     setInterval(()=>{
//         resolve("using normal promise method");
//     },10000);
// });

// function getData(){
//   m.then((res)=>console.log(res))
//   console.log("But it will print first")//in direct promise method : js enginee will not wait for promise to be resolved.
// }
// getData();
// //using async and await method..............................................

// const a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("It will print first bec of await")
//     },10000);
// });

// async function handlePromise(){
//     const val = await a; //here js engine will wait for promise resoled 
//     console.log("This will print after 10 sec");
//     console.log(val);
// }
// handlePromise();

// const a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("It will print  await")
//     },10000);
// });
// const b = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("It will print first bec of await")
//     },5000);
// });

// async function handlePromise(){
//     const val = await a; //here js engine will wait for promise resoled 
//     console.log("This will print after 10 sec");
//     console.log(val);

//     const val2 = await b; //here js engine will wait for promise resoled 
//     console.log("This will print after 5 sec");
//     console.log(val2);
// }
// handlePromise();

//IN reverse condition.........................................
// const a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("It will print  await")
//     },5000);
// });
// const b = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("It will print first bec of await")
//     },10000);
// });

// async function handlePromise(){
//     console.log("this wil not wait bec there is no await is implemented here ")
//     const val = await a; //here js engine will wait for promise resoled 
//     console.log("This will print after 5 sec");
//     console.log(val);

//     const val2 = await b; //here js engine will wait for promise resoled 
//     console.log("This will print after 10sec");
//     console.log(val2);
// } 
// handlePromise();