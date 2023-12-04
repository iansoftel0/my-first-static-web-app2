let d = new Date();
//document.body.innerHTML = "<h1>Ian Today's date is " + d + "</h1>";

//document.body.innerHTML = "<h1>Drew Today's date is " + location + "</h1>";;

//var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
//var obj = {};

// Sample URL
var urlString = "https://www.example.com/page.html?phonenumber=2141112233";

// Creating URL object for the given URL
var url = new URL(urlString);

// Retrieving query string values
var phonenumber = url.searchParams.get("phonenumber");
console.log(phonenumber); // Prints: Phone number

var x = "This is JavaScript";
 
document.getElementById('demo').innerHTML = x;