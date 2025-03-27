//document object model
console.log("DOM, short for Document Object Model, is a programming interface that represents web pages as a tree-like structure of nodes, allowing developers to access and manipulate the content, structure, and style of web pages using scripting languages like JavaScript. ");
console.log("DOM sepearated 3 different parts");
console.log("Core DOM - standard model for all document types");
console.log("XML DOM - standard model for XML documents");
console.log("HTML DOM - standard model for HTML documents");
console.log("1.HTMLdom=>The HTML DOM is a standard for how to get, change, add, or delete HTML elements.");

//topic 2 DOM methods
console.log("DOM methods perform the action add or delete the html elements");
console.log("DOM properties are values means get are set changing html elments");

console.log("document.getElementById(demo)innerHTML = Hello World!");
//The document object represents the webpage.
//document.getElementById method use id("demo") selects the element with id="demo".
//.innerHTML = "Hello World!" changes its content.
//The innerHTML property is useful for getting or replacing the content of HTML elements

//3.HTML DOM DOCUMENT
//The document object represents your web page.

//If you want to access any element in an HTML page, you always start with accessing the document object.

console.log("finding html elements in document model");
document.getElementById(id)	//Find an element by element id
document.getElementsByTagName(name)	//Find elements by tag name
document.getElementsByClassName(name)	//Find elements by class name

//changing html elements
element.innerHTML =  new html //content	Change the inner HTML of an element
element.attribute = new value	//Change the attribute value of an HTML element
element.style.property = new style	//Change the style of an HTML element
//Method	Description
element.setAttribute(attribute, value)	//Change the attribute value of an HTML element
//adding and deleting the elements
document.createElement(element)	//Create an HTML element
document.removeChild(element)	//Remove an HTML element
document.appendChild(element)	//Add an HTML element
document.replaceChild(new, old)	//Replace an HTML element
document.write(text)	//Write into the HTML output stream

//find all html elements in queryselector
console.log("queryselector");
console.log("If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method");
document.querySelector("p.intro");


