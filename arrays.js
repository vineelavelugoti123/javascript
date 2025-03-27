//if you want store multiple values in single varible use array
// array in js is objects
// array index start from 0,it can store similarvalues
console.log("diffrent ways to create an array");
let car=["BMW","suzuki","Iqua","motorala"];
let arr=new Array(5); //by using new keyword;
arr[0]="fruits";
console.log(arr[0]);
console.log[arr[1]];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

let numStrings = ["10", "20", "30"];
let numbers = numStrings.map(Number); // Converts each element to a number

console.log(numbers); // Output: [10, 20, 30]
console.log(typeof numbers[0]); // Output: number

console.log("Array methods")
// The length property returns the length (size) of an array
let cars=["kiya"];
console.log(cars.length);
//push method
let arr4=[10,20,30,40];
console.log(arr4);
console.log("push method can be used to insert the Value,automatically array size is increase");
arr4.push(50);
console.log(arr4);
console.log("unshift=>unshift method can be used to add the element in beginning of the array");
arr4.unshift(70);
console.log(arr4);
console.log("pop=>pop method remove the last elemnentin array and it also return the pop value");
let x=arr4.pop();
console.log(x);
console.log(arr4);
console.log("shift=>shift method can be used to remove the element beginning of the array");
let y=arr4.shift();
console.log(y);
console.log(arr4);
// splice=>splice method can be used to remove the elements in particural  index
// splice(index,deletecount,items) there are aruguments
console.log("splice=>remove the element in particluar index");
 let remove=arr4.splice(2,2) //here remove second index and thrid index delete count=2
 console.log(remove);
 console.log(arr4);
 console.log("by using splice add the elements in array");
 arr4.splice(1,0,30)//2=index,0=delete count,30 items add 30 in second index
 console.log(arr4);
 arr4.splice(2,1,40)//here delete the second index add the 30 in second index
 console.log(arr4);
 console.log("if you want to deelte mutile index values and add mutiple values in splice method");
 console.log(arr4);
 arr4.splice(1,2,70,50,60);
 console.log(arr4);

//indexof
console.log("indexof() can be used to return the particular element index")
console.log(arr4.indexOf(70));
console.log(arr4.includes(30))//return true or false

// Map()
console.log("map=>map method can be used to create an array apply the function to each element of an existung array,does not modify the original array");
let number=[9,14,12,8];
function map(x)
{
    return x*2;
   
}
console.log(number.map(map));
let result=number.map(x=> Math.sqrt(x));
console.log(number);
console.log(result);

// filter function
console.log("filter method create an array only the elemts meets specific condition");
let people = [
    { name: "Vineela", age: 25 },
    { name: "Vikas", age: 17 },
    { name: "Anu", age: 30 }
];

let adults = people.filter(person => person.age >= 18);

console.log(adults);

let ages=[23,22,17,26];
function checkages(y)
{
    if(y>=18)
    {
       return true
    }
    else{
       return false;
    }
}

let results=ages.filter(checkages)
console.log(ages);
console.log(results);

// by using arrow function

let agesRes = ages.filter(y => y >= 18);
console.log(agesRes);

// reduce method
console.log("reduce=>reduce method process the array and give the output single value by applying function in each element,it perform addition,mul and differnt operations give single value");
let arrvalues=[1,4,6,8,8];
let sum=arrvalues.reduce((total,x)=>total+x,0);
console.log(arrvalues);
console.log(sum);

// max value
let numberss = [10, 25, 6, 50, 8];

let maxNum = numberss.reduce((max, num) => (num > max ? num : max), numbers[0]);
// here max is accumulator numbers[0] is initial value,num is current value
console.log(maxNum); // Output: 50

// some method
console.log("some=>The .some() method checks if at least one element in an array passes a condition (returns true). If any element satisfies the condition, it returns true; otherwise, it returns false.")
let values=[34,56,78];
let somevalue=values.some(num=>num>45);
console.log(somevalue);
// every
console.log("Checks if ALL elements satisfy a condition.Returns true if all elements pass, otherwise returns false.")

let values1=[34,56,78];
let somevalue1=values.every(num=>num>45);
console.log(somevalue1);

//find
console.log("Finds the first element that satisfies a condition.Returns the first matching element or undefined if none is found.");
let numbers3 = [10, 25, 6, 50, 8];
let firstLargeNum = numbers3.find(num => num > 20);
console.log(firstLargeNum); // Output: 25
// findindex;
console.log("Find the Index of the First Number Greater Than 20,based on condition");
let numbers4 = [10, 25, 6, 50, 8];
let indexLargeNum = numbers4.findIndex(num => num > 25);
console.log(indexLargeNum); // Output: 1 (index of 50)

// multidimenssional array
console.log("multi dimensional array represnts in grid matrix in java script there is no direct syntax you can achieve by creating array with in the array");
let muld=[[1,2,3,4],[12,34,56]];
console.log(muld[0]);
console.log(muld[0][2]);
console.log(muld[1][3]);

//print an array if there are two class rooms each class room 3 students

let two = [
    [12, 37, 45],
    [78, 67, 89],
    [11, 12, 13],
    [13, 14, 15]
];

console.log(two);

// Loop through each row
for (let i = 0; i < two.length; i++) {
    // Loop through each column
    for (let j = 0; j < two[i].length; j++) {  // Fix: `two[i].length`
        console.log(`Element at (${i}, ${j}) = ${two[i][j]}`);
    }
}






 





