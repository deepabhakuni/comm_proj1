// Example: Function to check login state on page load
function checkLoginState() {
    let loginUser = JSON.parse(localStorage.getItem("loginUser")) || [];

    if (loginUser.length > 0) {
        document.getElementById('showcontent').style.display = 'block';
        document.getElementById('notloggedin').style.display = 'none'; 
    } else {
        document.getElementById('showcontent').style.display = 'none';
        document.getElementById('notloggedin').style.display = 'block';
    }
}

// Check login state when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginState();
});