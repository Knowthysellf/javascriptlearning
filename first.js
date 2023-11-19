console.log("I love J.s");
console.log("Welcome to the city of safu");
fullname="Yak Safu";
console.log(fullname);
price=23.45
console.log(price);
x=null;
y=undefined;
console.log(x);
console.log(y);
isFllow=false;
console.log(isFllow);
x=25;
console.log(x);

//let  /var /const 
// var --> variable can be redeclared and updated. A global scope variable
//let --> variable cant be re decleae but can update. A bloock scope variable
// const variable can't be re declared or updated . A block scope variable 

let fullName ="Golam Rahman Yak Safu";
console.log(fullName);

var age=24;
console.log(age);

var  age=59;
console.log(age);

var age=89;
console.log(age);

let a=10;
console.log(a);
a=4567;
console.log(a);

const sa=34;
console.log(sa);

{
    let b=5;
    console.log(b);
}
// undefined console.log(b);
{
    let b=5;
    console.log(b);
}

//number string boolean undefined null biglnt symbol
//object 
let num=1023.25
let xy=BigInt("123");


const student = {
    fullNam: "Safu",
    age :22,
    cgpa: 3.60,
    isPass: true
}
student.age=student.age+1;
console.log(student.age);