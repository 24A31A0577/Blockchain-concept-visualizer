function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.some(u => u.email === email);
    if (exists) {
        alert("User already exists!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully!");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "admin@gmail.com" && password === "admin123") {
        alert("Admin Login Successful!");
        window.location.href = "admin.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (validUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));
        alert("User Login Successful!");
        window.location.href = "modules.html";
    } else {
        alert("Invalid Email or Password!");
    }
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
function togglePassword() {
    let pwd = document.getElementById("password");
    if(pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
}
