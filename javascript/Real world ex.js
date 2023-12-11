//Real World Example of Async and await
//here im using API
const API_URL ="https://api.github.com/users/Nitheesh-Parkala";

async function handlePromise(){
    try{
    const data = await fetch(API_URL);
    console.log(data);
    const jsonValue = await data.json();
    // fetch()=>Response.json()=> jsonValue;
    console.log(jsonValue);
}catch(err){
 console.log(err)
   }
};

handlePromise().catch((err)=>console.log(err));