// let sum = 10+20;

//  + | - | * | / | %

// console.log(sum);

// Assignment Operations

// = | += | -+ | *= | /=

//comparison Operations

// == | != | >= | <= | > | <

// ===

// let isEqual = (5 == '5');

// let isThisEqual = (5 === '5');

// console.log(isEqual);
// console.log(isThisEqual);

//Logical Operations

// && | || | !


//const names = "Saman";

//names = "Kamal";
//console.log(names);


// {
//     var age = 12;
// }

// console.log(age);

// function sample(){
//     var age = 12;

//     //let name = "Saman";

//     name = "Kamal"
// }



// console.log(name);

// age = 20;

// console.log(age);



// const customer = {
//     name:"Thisara",
//     age: 21,
//     address:"Rathnapura",
//     phone:"0779930534",
//     email:"thisara.com"
// }

// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.address);
// console.log(customer.phone);
// console.log(customer.email);


// const numbers = [1,2,3,4,5,6,7,8,9];



// for(let i =0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }




// const customer = [
//     {
//         name: "Thisara",
//         age: 21,
//         address: "Rathnapura",
//         phone: "0779930534",
//         email: "thisara.com"
//     },
//     {
//         name: "Lavanda",
//         age: 18,
//         address: "Colombo",
//         phone: "0779930535",
//         email: "lavanda.com"
//     },
//     {
//         name: "Chamika",
//         age: 21,
//         address: "Rathnapura",
//         phone: "0779930834",
//         email: "chamika.com"
//     }
// ];


// for (let i = 0; i < customer.length; i++) {
//     console.log(customer[i].name);
// }


// function run(x,y){
//     return x+y;
// }

// let sum = run(12,50);

// console.log(sum);



class customer{

    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    
    }
    setname(name){
        this.name=name;
    }
    getname(name){
        return this.name;
    }
}

let Customer = new customer("saman",21,"Panadura");

let Customer2 = new customer("kaman",20,"Panadura-South");

console.log(Customer.getname());
Customer2.setname("Somapala");
console.log(Customer2);
