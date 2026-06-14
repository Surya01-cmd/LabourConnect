document
.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

const user = {
name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value,
role: document.getElementById("role").value
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

if(user.role === "contractor"){
window.location.href =
"contractor-dashboard.html";
}
else{
window.location.href =
"worker-dashboard.html";
}

});