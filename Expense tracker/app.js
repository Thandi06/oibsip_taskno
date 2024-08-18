// Function to toggle password visibility
function togglePasswordVisibility(passwordInput, checkbox) {
    passwordInput.type = checkbox.checked ? 'text' : 'password';
}

// Event listener for login form password visibility
const showPasswordCheckbox = document.getElementById('show-password');
if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener('change', function () {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            togglePasswordVisibility(passwordInput, this);
        }
    });
}

// Event listener for register form password visibility
const showRegPasswordCheckbox = document.getElementById('show-reg-password');
if (showRegPasswordCheckbox) {
    showRegPasswordCheckbox.addEventListener('change', function () {
        const regPasswordInput = document.getElementById('reg-password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        if (regPasswordInput) {
            togglePasswordVisibility(regPasswordInput, this);
        }
        if (confirmPasswordInput) {
            togglePasswordVisibility(confirmPasswordInput, this);
        }
    });
}

// Event listener for login button
const loginButton = document.getElementById('login-button');
if (loginButton) {
    loginButton.addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const message = await response.text();
        document.getElementById('message').innerText = message;
    });
}

// Event listener for register button
const registerButton = document.getElementById('register-button');
if (registerButton) {
    registerButton.addEventListener('click', async () => {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            document.getElementById('message').innerText = "Passwords do not match!";
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const message = await response.text();
        document.getElementById('message').innerText = message;
    });
}
