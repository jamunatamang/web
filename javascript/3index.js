// if else

let apple = false
let banana = false
let umbrella=  false

if(apple){
    console.log("apple is good");
}
else if(banana){
    console.log("banana is  good");
}
else if( umbrella){
    console.log("apple is not good");
}
else {
    console.log("apple is needed");
}


// let subjects=[
//     {
//         title : "html",
//         status :false
//     },
//     {
//         title:"css",
//         status: false
//     },  
// ]
 if(subjects[0].status) {
    console.log(`${subjects[0].title} is completed`);
 }
 else{
    console.log(`${subjects[0].title} is pending`);;
 }
 if(subjects[1].status) {
    console.log(`${subjects[1].title} is completed`);
 }
 else{
    console.log(`${subjects[1].title} is pending`)
 }
 
// convert the function
 
function checkStatus(subjects){
   if(subjects.ststus){
    console.log(`${subjects[0].title} is completed`)
   }
   else{
    console.log(`${subjects[0].title} is pending`)
   }
}




let students =[
    {
        name:"ram",
        hasPaid:false,
        hasScholorship: false,
    },
    {
        name:"hari",
        hasPaid:false,
        hasScholorship:false,
    },
    {
        name:"shyam",
        hasPaid:true,
        hasScholorship:false,
    },
]

let canGiveExam =[]
let cannotGiveExam =[]

if(students[0].hasPaid){
    console.log(`${students[0].name} can give exam `)
}

// check the two conditions
else if(students[0].hasScholorship){
    console.log(`${students[0].name}can give exam `)
}
else{
    console.log(`${students[0].name} cannot give exam `)
}



if(students[1].hasPaid){
    console.log(`${students[1].name} can give exam`)  
}
 else{
    console.log(`${students[1].name} cannot give the exam `)
}

if(students[2].hasPaid){
    console.log(`${students[2].name} can give exam `)
}

else{
    console.log(`${students[2].name} cannot give exam `)
}


// CONVERT THE FUNCTION

function checkStudentsEligibility(students){
    
}






