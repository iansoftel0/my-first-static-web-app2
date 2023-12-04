var phonenumber = "UNDEFINED";
var queryStringKeyPhoneNumber = "phonenumber";

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}

if (urlParams.has(queryStringKeyPhoneNumber)) {
    phonenumber = urlParams.get(queryStringKeyPhoneNumber);
}
 
window.onload = function () {
    var e = document.getElementById("phonenumber");
    e.innerHTML="Search mnemonic: " + phonenumber;
    };