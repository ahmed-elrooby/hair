// let promise = new Promise((resolveFunction,rejectFunction)=>{
//     // resolveFunction(2);
//     rejectFunction("ther are error ");
// }).then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.error("error",err);
// })
// console.log(promise);
// let promise = new Promise((resolveFunction,rejectFunction)=>{
//     const employees = [];
//     if(employees.length == 4){
//         resolveFunction(employees);
//     }else{
//         console.log(Error("there is error in your code please check it "));
//     }
// }).then((resolveFunction)=>{
//     resolveFunction.length = 2;
//     return resolveFunction;
// }).then((resolveFunction)=>{
// resolveFunction.length = 1;
// // console.log(`the chossen empolyee is ${resolveFunction}`);
// }).catch((rejected)=> console.log(rejected)).finally((console.log("i will do this action ")))


// async ==> return a promise but this is clean way 


// async function getData(){
//     const arr = ["mohamed"];
//     if(arr.length > 0){
//         return "users found ";
//     }else{
//         throw new Error("users not found")
//     }
// }
// console.log(getData());
// getData().then(
//     resolved=> console.log(resolved),
//     rejected=> console.log("opps" + rejected)
                
// )

// const newPromise = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         rejected(Error("my promise is rejected"))
//     },3000)
// })

//  async function makeData(){
// console.log("before promise");
// // newPromise.then((resolved)=> console.log(resolved))
// console.log(await newPromise.catch((err)=> err));
// console.log("after promise");
// }


// async function makeData(){
//     console.log("before promise");
//     // newPromise.then((resolved)=> console.log(resolved))
//     try{ //try excute code 
//         console.log(await newPromise);

//     }catch(reasone){// for handling error 
//     console.log(`reasone:${reasone}`);
//     }finally{ //excute code any way
//     console.log("after promise");

//     }
//     }
// makeData();


async function toGetData()
{
try{
    const zeroData =await fetch("https://api.github.com/users/elzerowebschool/repos");
    // zeroData.then(res => res.json()).then(data => console.log(data[1].name))
    console.log(await zeroData.json());
}
catch(err){
    console.error(Error("there is error "));

}finally{
    console.log("ahmed");
}


}
toGetData()


function call(e){
    e.target.style.color="red";
}
p = document.getElementById("para");
console.log(p);

p.addEventListener("click",/*callback functio ==> */ call)// if i make call as this ==> call() this is immediatly make call



//callback hell function 
setTimeout(() => {
    console.log("parent zone");
    setTimeout(() => {
        console.log("chaild number one ");
        setTimeout(() => {
            console.log("chaild number two");
            setTimeout(() => {
                console.log("chaild number three");
            }, 1000);
        }, 1500);
    }, 2000);
}, 3000);