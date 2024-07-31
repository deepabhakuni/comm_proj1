function validate() {
    var fullname = document.getElementById("fullname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fullname == "") {
        alert("Please enter fullname");
        return false;
    } else if (email == "") {
        alert("Please enter email address");
        return false;
    } else if (!email.match(validRegex)) {
        alert("Please enter a valid email address");
        return false;
    } else if (password == "") {
        alert("Please enter password");
        return false;
    } else if (password.length < 8) {
        alert("Password length should be minimum 8 characters");
        return false;
    } else if (confirmPassword == "") {
        alert("Please enter confirm password");
        return false;
    } else if (confirmPassword != password) {
        alert("Passwords do not match");
        return false;
    }

    var users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    var user = {
        id: Number(new Date()),
        fullname: fullname,
        email: email,
        password: password,
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
}

function validatelogin() {
    let password = document.getElementById("loginpassword").value;
    let email = document.getElementById("loginemail").value;

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == "") {
        alert("Please enter email address");
        return false;
    } else if (!email.match(validRegex)) {
        alert("Please enter a valid email address");
        return false;
    } else if (password == "") {
        alert("Please enter password");
        return false;
    }

    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    let loginUser = [];

    let status = false;
    users.find((result) => {
        if (result.email == email && result.password == password) {
            var user = {
                id: result.id,
                fullname: result.fullname,
                email: result.email,
                password: result.password,
                isLoggedIn: true
            }
        
            loginUser.push(user);
            localStorage.setItem("loginUser", JSON.stringify(loginUser));
            status = true;
        }
    });

    if (!status) {
        alert("Wrong Email or Password.");
        return false;
    } else {
        alert("Login successful");
        return true;
    }
}

function validateEdit() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let userid = document.getElementById("userid").value;

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == "") {
        alert("Please enter email address");
        return false;
    } else if (!email.match(validRegex)) {
        alert("Please enter a valid email address");
        return false;
    } else if (fullname == "") {
        alert("Please enter name");
        return false;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    let loginUser = JSON.parse(localStorage.getItem("loginUser")) || [];

    let userIndex = users.findIndex(result => result.id == userid);

    let password = users[userIndex].password;

    if (loginUser[0].id == userid) {
        loginUser[0].fullname = fullname;
        localStorage.setItem("loginUser", JSON.stringify(loginUser));
    }
    users.splice(userIndex, 1);
    var user = {
        id: userid,
        fullname: fullname,
        email: email,
        password: password
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Details updated successfully!");
}