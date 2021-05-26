// create html element
var heading3 = document.createElement("h1");


//if want to add heading3 and text then have to apply appendchild method
var text = document.createTextNode("Hello World");
heading3.appendChild(text);


// if want to add with div, firstly find the div
var myDiv = document.getElementById("mydiv");
myDiv.appendChild(heading3);


// how to remove element
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

// how to add element upper
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("Hi World");
heading0.appendChild(text0)
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading1); // need to take double para metar


