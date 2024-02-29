// ternary operator
//syntax
// condition ? expressionIfTrue : expressionIfFalse

let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Leave the umbrella at home";
console.log(action); 
// Output will be "Take an umbrella"


// OR operator 

let a = 10;
let b= 20;

if ( a>=11 || b <= 21){
    console.log("yes you are eligiable");
}

// 
// let count = 100;
// //count += 1;

// console.log({ count: count });


//logical operator
//1. && (and)= Read only when both conditions must be true, 
//2. ||(OR) = Run only when either one condition must be TRUE.
//3. !(NOT)= oposite 


let user ={
    username:"jamuna123",
    password:"123412",
    isActivated: true,
}
  let inputPassword = "123412"
  let inputName ="jamuna123"


 if(user.username ==  inputName  && user.password == inputPassword  && user.isActivated) {
    console.log("jamuna can login")
 }else{
    console.log("jamuna cannot login")
 }


 let students =
   {
       name:"ram",
       hasPaid:true,
       hasScholorship: true,
       fullAttendence: false,
   }


if (  (students.hasPaid || students.hasScholorship) && students.fullAttendence) {
   console.log("can login")
} else{
   console.log("connot loging")
}

// FOR LOOP

// for(let i=0; i <=5; i++){
//    if(i% 2 ==0)
//    console.log(i);
// }
// console.log("dome")
 
  
//   let users=["ram", "sita", "hari"]
//   for(let index=0; index<3; index++){
//    console.log(index);
//    console.log(users[index]);
//   }


  let subjects=[
           {
           title : "html",
           status :false
        },
        {
            title:"css",
            status: false
        },  
    ]

    for(let index=0; index<2; index++){
      if(students[index].status){
      console.log(`${students[index].title} is pending`)
   }
   
     
    }
  
   //  console.log(subjects[i].status);

// for( let count=1; count<10; count++ ){
//    console.log(count);
// }
// console.log("end of the count")



// for(let users=1; users<=3, users++){
//    console.log(users[1])
// }

// let i=1;
// while(i<=5){
//    console.log(i); i++;
// }

// let i=1;
// do{
//     console.log(i); i++;
// }while(i<=7){
//    console.log("ok")
// }
















  


  
