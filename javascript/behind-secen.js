//what happens behind the scene?
const a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("It will print  await")
    },5000);
});
const b = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("It will print first bec of await")
    },10000);
});

async function handlePromise(){
    console.log("this wil not wait bec there is no await is implemented here ")
    const val = await a; //here js engine will wait for promise resoled 
    console.log("This will print after 5 sec");
    console.log(val);

    const val2 = await b; //here js engine will wait for promise resoled 
    console.log("This will print after 10sec");
    console.log(val2);
} 
handlePromise();

/*acttuly js enginee is not stoping here bec if it stop then the website get freeze 
so actully here if promise method is not resolved it will suspend and come out of the call stack 
after it resoved then again promise come inside the call stack then it will countonue excute*/

//handlePromise()
//call stack()  //first it will empty then handlePromise will go inside the function
//async - a,b....
