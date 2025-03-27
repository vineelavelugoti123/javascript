//shallowcopy
console.log("when you create one object and assign another object by using(=) shallow copy is created");
let obj={
    name:"vineela",
    age:23,
    city:"Nellore",

}
console.log(obj);
let obj2=obj  //shallow copy created
console.log("after modification");

obj2.city ="hyderabad";
console.log(obj2);
console.log(obj);//after modify the code both objects will be changed

// Deepcopy
console.log("deepcopy we use json.parse() and json.stringfy() methods");
console.log("here new object is created by using json.parse and json.string()");
console.log("Json,stringify method take javascript object as an argument and convert the string");
console.log("This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object");
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee); 
console.log("New Employee=> ", newEmployee);//only change new employee values 

//another way of deepcopy use structured clone this is the best method

console.log("deepcopy=>A deep copy creates an entirely new object, including all nested objects/arrays, without sharing references.");
let obj3 = { name: "Alice", address: "New York" } ;

let obj4 = structuredClone(obj3);

obj4.address = "LA";  // ✅ Only changes obj2

console.log(obj3); // 
console.log(obj4); // 




