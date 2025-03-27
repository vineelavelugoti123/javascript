console.log("hello welcome to javascript");
let age=23;
let height=67.9;
console.log(typeof age);
console.log(typeof height);
let bigint=345678897n;
let result ="hello"/ 5;
console.log(typeof bigint);
console.log(typeof result);
let result1 = "hello" / 2;
console.log(result1);
let name="vineela";
console.log(typeof name);
let isplacement=false;
console.log(typeof isplacement);
let a;
console.log(typeof a);
let b=null;
console.log(typeof b);

// typecasting
let c=123;
console.log(c);
console.log(typeof c);
let d=String(a);
console.log(typeof d);
let name1="vineela";
console.log(typeof name1);
let name3=Number(name1);
console.log(typeof name3);
let st="";
let b3=Boolean(st);
console.log(b3);
let string4="1234vineela";
let b5=parseInt(string4);
console.log(b5);

let age3=18;
console.log(age3=='18');
// strict eqyality
console.log(age3==='18');
let ispresent=true;
// type coercion
console.log(ispresent==1); 
console.log(ispresent===1);

console.log(null==undefined);
console.log(null==null);
console.log(null==0);
console.log(null===0);
let height3="78";
console.log(height3==78);
console.log(height===78);


// if-else cobditions

let age4=18;

if(age4<20)
{
    console.log("rani eligible for vote");
}

if(age4>=18)
{
    console.log("eligible");
}
else{
    console.log("not eligible");
}

let ages=67;
if(ages<12)
{
    console.log("childerns eligible for ticket");
}
else if(ages>40&&ages>65)
{
    console.log("adults are eligible for tickets");
}
else
{
    console.log("senior citizens are eligible for ticket")
}

// switch:used to evaluate multiple conditions;

let userrole="admin";

switch(userrole)
{
    case "admin":
        console.log("full access");
        break;
    case "editor":
        console.log("content creation");
        break;
    case "author":
        console.log("content modification");
        break;
    case "user":
        console.log("read the content");
    default:
        console.log("acess denied");     
}


let day=5;
switch(5)
{
    case 0:
    case 1:
        console.log("happy weekend");
        break;
    case 2:
    case 3:
    case 4:
        console.log("mid week");  
        break;
    case 5:
    case 6:
        console.log("end of the weekend");
        break;
    default:
        console.log("invalid day");                     
}

// ternary operator
let message= age>=40? "eligible for drive": "not eligible for drive";
console.log(message);


// print 5 stars

for(let i=0;i<5;i++)
{
    console.log("*");
}

// print star besides

let stars="";
for(let i=0;i<10;i++)
{
    stars+="*";
}
console.log(stars);

let i=0;
while(i<=5)
{
    i++;
}
console.log(i);

let j=1;
do{
    console.log("*");
    j++;
}while(j<=10)

    // print star pattern

    console.log("pattern programming");
    let n=6;
    for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=0;j<n;j++)
        {
            row+="*";
        }
        console.log(row);
    }

    // functions

    console.log("functions");
    // function take a value and return a value
    let x;
    let y; 
    function add(x,y)
    {
        let c=x+y;
        return c;
    }
    let res=add(10,30);
    console.log(res);

    console.log("a function take a value but cannot return a value");
    let d1;
    let e1;
    function add(d1, e1)
    {
       let f=d1*e1;
       console.log(f);
    }
    add(12,78);

    console.log("dry principal:don't repeat your self:it can be used avoid repaetion of code write once used to mutiple logics,improve the code redbilty,decrese the code length");
    let studentmarks=67;
    let studentmaxmarks=100;
    let studentgrade;
    let percentage=studentmarks/studentmaxmarks*100;
    if(percentage>=90)
    {
      studentgrade='A';
    }
    else if(percentage>=80)
    {
      studentgrade='B';
    }

    else if(percentage>=60)
    {
        studentgrade='c';
    }
    else if(percentage>=50)
    {
        studentgrade='D';
    }
    else{
        console.log("student failed");
    }
    console.log(studentgrade);

    console.log("by using functions reuse code and maintability,reduce the length");
    function studentgrades(marks1,maxmarks1)
    {
        let percentage1=marks1/maxmarks1*100;
        let studentg;
        if(percentage1>=90)
        {
            studentg='A';
        }
        else if(percentage1>=80)
        {
            studentg='B';
        }
        else if(percentage1>=60)
        {
            studentg='C';
        }
        else
        {
            studentg='F';
        }
        console.log("studentgrade="+studentg);
    }
    studentgrades(67,100);
    studentgrades(12,40);
    studentgrades(78,100);

    console.log("Types of functions:");
    console.log("1. Function Declaration");
    console.log("2. Function Expression");
    console.log("3. Arrow Function");
    console.log("4. Immediately Invoked Function Expression (IIFE)");
    console.log("5. Function Generator");

    // funtion declartion common way funtion and function name
    let v;
    let r;
    function add3(v,r)
    {
        let res=v*r;
        return res
    }
    console.log(add3(12,5));

    // function expression defines without using function name and assign the varible
    // (annymous function) another name
    const add4=function(a,b)
    {
        return a/b;
    }
    console.log(add4(12,8));
    // arrow function dont use function keyword and assign the varible
    // use arrow functions and after the parameters and it automatically return 
    // result dont use retur
    const add5=(a,b)=>a%b;
    console.log(add5(120,7)); 
    
    // immediatly invoked function=>function excuted immdietly after execution
    // it is enclosed with parenthasis
    (function() {
        console.log("I run immediately");
      })();
      
    // hoisting=>hoisting in varibles and functions are moving in to top of the code
    // befor code excution
    // hoisting with var
    // var can be used hoisted but default value is undefined,varible declared but attempting to acess undefined
    console.log("hoisting");
    console.log(ho);
    var ho=10;
    console.log(ho);

    // hoisting with let
    // let can be used hoisting but there is an error,varible declare but cannot intilize the value,
    // but accessing before intialization it leads to an reference error that tempral dead zone
    // console.log(ho1);

    let ho1=18;
    console.log(ho1);
 
    console.log("function declartions are hoisted only,function expressions and arrow functions are not hoisted");
    greet();
    function greet()
    {
        console.log("function declartion hoisted");
    }
    
    // types of scope=>where varibles and functions are accessible in with in program
    // types of scopes
    // global scope
    // function scope
    // block scope
    console.log("global variable declared outside of any function or block it can accessible anywhere of program");
    let ram;
    function fun()
    {
        console.log("global scope");
    }
    ram=100;
    console.log(ram);
    fun();

    console.log("a varible declared with in function it cannot be accessed outside the block");
    function funny()
    {
        let fun1="haldi function is funny";
        console.log(fun1);
    }
    funny();
    // console.log(fun1); it cannot access outside the function,reference error occur

    console.log("block scope  means it can declared inside if while for accessible only inside block");
    console.log("let and const are block scoped var not block scoped it can be leakout");
    let temp=30;
    if(temp>25)
    {
    var coolingTemp=temp-25;
    console.log("Server room needs to cooled by", coolingTemp);
    }
    else
    {
    var heatingTemp=25-temp;
    console.log("Server room needs to heated by", heatingTemp);
    }
    console.log(temp);
    console.log(coolingTemp);
    console.log(heatingTemp);

    // another example of block scope
    console.log("another example of blockscope");
    function blockScope(numb) {
        for (var i = 1; i < numb; i++) {
          console.log(i);
        }
        console.log( "final value" +i); // ReferenceError
      }
      
      blockScope(5);

//    differnce between var and let
//   1. Scope
// - var: Function scope (accessible throughout the function)
// - let: Block scope (accessible only within the block it's defined in)

// 2. Hoisting
// - var: Hoisted to the top of its scope (declaration and assignment)
// - let: Hoisted to the top of its scope (declaration only, not assignment)

// 3. Redefinition
// - var: Allows redefinition (overwrites previous value)
// - let: Does not allow redefinition (throws a SyntaxError)

console.log("in java script create object in mutiple ways,object literals,constructor functions and classes,object is haspart and does part it define properties and behaviour")
console.log("creating object in object lieral=>a object litral contain keyvalue pairs inside the curly braces object litrals is also called as object intisilizers");
const person={
    name:"vineela",
    color:"white",
    weight:78,
    height:5,
    city:"hyderabd",

};
console.log(person);

console.log("create empty java script object");
const per={};
per.name="vikas";
per.age="25";
per.city="nellore";
console.log(per);

console.log("create an object using new keyword");

// Create an Object
const person1 = new Object();

// Add Properties
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";
console.log(person1);

// for readibilty,excution,simplicity use object literal method

// accessing object properties
console.log([person1["age"]]);

console.log("function in js perform the action,function can be strod in property value");


const persons={
    name:"vineela",
    color:"white",
    weight:78,
    height:5,
    city:"hyderabd",
    start:function()
    {
        console.log("person started to city");
    },
    stop:function()
    {
       console.log("person stop the city");
    }

};
console.log(persons);

// pass by value
console.log(" pass by value=>create a varible and assign the value,then create another varible copy the actual value created and assigned it does not effect the another varible");
let ab=100;
let bc=ab; //pass by value
bc=100;
console.log(ab);
console.log(bc);

// pass by refernce
console.log("pass by reference=>when object,functions,array copied to another varible only memory location is copied,it does not effect other varibles");
let obj={name:"ram",cost:1200,age:34};
let obj2=obj;
console.log(obj);
obj2.name="ramu"; //pass by refernce
console.log(obj.name);
console.log(obj2.name); 

//spread operatore
console.log("To create a true copy of an object and avoid modifying the original");
let obj3 = { name: "Toyota" };
let obj4 = { ...obj3 }; // Spread operator creates a copy
obj4.name = "Honda";
console.log(obj3.name); // Output: Toyota
console.log(obj4.name); // Output: Honda

// functions as objects

console.log("function as objects=>functions can stored thed variable,passing the arguments to inside function and reurn the value");
console.log("1.understanding functions in frist class citizens,functions can be stored in variable");

let stv={
    name:"add",
    lenght:"1",
};
let asstv=stv;
console.log(asstv);

// 2.passing arguments to function
console.log("passing arguments to inside function that is high order function");
function examp(car)
{
  console.log(car)
}
let c1={
    name:"BMW",
    color:"white",
}
examp(c1);

// 3 return values
console.log("function can return the values");
function example()
{
    let person4={
        name:"vineelarames",
        age:"23",

    }
    return person4;
}
console.log(example());

//scope chain
console.log("Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope)");
console.log("This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.");

let global_letiable = 20;
 
function main_function() {
    // Local letiable
    let local_letiable = 30;
 
    let nested_function = function () {
 
        // Display the value inside the local letiable
        console.log(local_letiable);
    }
 
    let another_nested_function = function () {
 
        // Displays the value inside the global letiable
        console.log(global_letiable);
    }
 
    nested_function();
    another_nested_function();
}
 
main_function();


// call back function in javascript
console.log("call back function=> A call back function pass an argument to another function")
console.log("this techinique allow to function to call another function");
function addition(a,b)
{
    console.log("addition operation performed");
    return a+b;
}
function sub(a,b)
{
    console.log("sub operation performed");
    return a-b;
}
function multi(a,b)
{
    console.log("multiplocation performed");
    return a*b;
}
function myfunction(a,b,callback)
{
   let result= callback(a,b);//here call back is addition frist myfunction run call back function after finish of myfunction
   console.log(result);
}
myfunction(10,3,addition);
myfunction(10,3,sub);
myfunction(2,7,multi);

