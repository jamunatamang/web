//  let cources=["mern", "Marketing", "javascript"]
// let detailedCources = [
//     { name: 'mern',  //object is, name=key, mern=value
//     duration:3
// },
//     {
//        name: 'Digital marketing',
//     duration:'4'
// },
//     { 
//        name: 'javascript',
//        duration: '2.3'
//     },
// ]
// console.log([1], 'Digital marketing')

//  console.log("before", cources);
//   console.log(cources[1]);
//   cources[1]="digital mareting";




//   console.log("after", cources);

let colors=[
    {
       name:'red',
       hex: '#ff0000',
       rgb :'rgb (255, 0, 0)',
    },
    {
        name:'green',
        hex: '#008000',
        rgb :'rgb(0,128,0) ',
     },
]

console.log(colors);
// nexted object
let user={
    name:"jamuna",
    address:{
        permanent:{
            district:"sindhupalchok",
            wardNo:4,
        },
        temporary:{
            district:"kathmandu",
            wordNo:7,
        }
    },
    NumberNmuber:9823019832,
}

console.log(user);
console.log("before", user);
console.log(user[3]);
user[3]="jorpati";

console.log("after", user);

//list of different users
let users=[{
    name:"ganga",
    address:{
        prermanet:{
            district:"sindhupalchok",
            ward:4,
        },
        temporary:{
            district:"pokhara",
            ward:8
        }
    },
    number:{
        ncell:9808955646
    }
},
{
    name:"jamuna",
    address:{
        permanent:{
           district:"sindhupalchok",
           ward:6
        },
        temporary:{
            district:"kathmandu",
            ward:888
        },
        number:{
            ncell:9823019832,
            ntc:9841317510,
        }
    }
}
] 
console.log(users);




let topics=[
    {
        title:"variable",
        ststus: "pending"
    },
    {
        title:"object",
        ststus: "complete"
    },
    {
        title:"array",
        ststus: "pending"
    },
]


// console.log(topics[0]);
// topics[0].ststus="variable is completed";
// console.log(topics[0]);

// console.log(topics[1]);
// topics[1].ststus="object is completed";
// console.log(topics[1]);

// console.log(topics[2]);
// topics[2].ststus="array is completed";
// console.log(topics[2]);

console.log("topics",topics[0].title,"is",topics[0].ststus);
console.log("topics",topics[1].title,"is",topics[1].ststus);
console.log("topics",topics[2].title,"is",topics[2].ststus);






let fruits=[
    {
        name:"Apple",
        status:"sweet"
    },
    {
        name:"kiwei",
        status:"non"
    },
    {
    name:"pinaple",
   status:"verySweet"
    }
]
//apple is sweet
console.log("fruits",fruits[0].name,"is",fruits[0].status);
// banana is non.
console.log("fruits", fruits[1].name,"is",fruits[1].status);
//pinaple is verySweet
console.log("fruits",fruits[2].name,"is", fruits[2].status);


let input1= 10
let input2=2
result1=12
//console.log(input1 + "+" + input2 + "=" + result1);


//better solution
console.log(`${input1} + ${input2} = ${input1 + input2}`);

//the sum of 1 is 2 is 3= task

function taste(input){
    console.log(`taste of ${input} is ${input*2}`);
}

  taste(apple,banana);
  taste(kuwei,banana);