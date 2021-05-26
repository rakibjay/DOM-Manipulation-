// if want to select heading then have to need id, class or tagname.
//1. formula:document.getElementById("id");
//2. value change formula:document.getElementById("id").innerHTML = "Hello World" 


// getElementById

var myHeading = document.getElementById("heading1");  // (use variable)
myHeading.innerHTML="Hello World id";  // (if want to change the value then have to variable add with innerHTML)

var myHeadingClass = document.getElementsByClassName("heading2")[0]; //must need to mention the index number, if want to change the value
myHeadingClass.innerHTML="Hello World Class";

var myHeadingTag = document.getElementsByTagName("p")[0]; //must need to mention the index number, if want to change the value
myHeadingTag.innerHTML="Hello World TagName"


