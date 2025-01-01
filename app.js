const input = document.getElementById("input") // This givs us access to the element by id from our html. The input is the id from html. This does not give us the value when inputted. 

// Gives us the value when inputted: 

function check () {const value = input.value; // this bit gives us the value of the text input} 
alert(value)
// now we need to determin if the text inputted is a palindrome: 
// A palindrome is a word that is spelt the same front wards as it is backwards. E.G Dad, Nan. 
// So what we will need to do is reverse the orginal string and compare it to the orginal. 

function reversesString(str) {}
// We are putting a pramiter as str and this is the value that we will get to give us input to the function.  

// Before we reverse the string we have to convert the string to an array which breaks down the string into index values. See below. 

"hello" => ["h","e","l,"l","o"]
            0     1  2   3  4
// So once we have convert the sring into an array we can then reverse the letters within the array and then we can convert the string back into a string. 
// to convert the string into an array we use the split method.
function reversesString(str) {
    return string.split("")
}

// Now we are going to reverse the string. 

function reversesString(str) {
    return string.split("").reverse() 
}

// Now we want to compare this to the orginal input which is the function below. 

function check () {const value = input.value;} 

// Now we want to convert the splitted string back into a string using the .join method. 

function reversesString(str) {
    return string.split("").reverse().join("")
}

// Now we have to check if the string is the same making it a palindrom. We use an if statement to set a condition to evaluate to true or false. So we want to test if the value is equal to the reverse. 


if (value === reverse) {alert("PALINDROME")}

else {alert("Not today!")}



// Complete Script: 

const input = document.getElementById("input") 

function reversesString(str) {
    return string.split("").reverse() 
}

function check () {const value = input.value; 
const reverse = reversesString(value)  
alert(value)


if (value === reverse) {alert("PALINDROME")}
else {alert("Not today!")}