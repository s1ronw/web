document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginURL = 'https://dummyjson.com/auth/login';

        const payload = {
            username: username,
            password: password
        };

        try {
            const response = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();

            console.log('Login successful:', data);
            alert('Login successful! Token: ' + data.token);

        } catch (error) {
            console.error('Error during login:', error);
            alert('Error: ' + error.message);
        }
    });

    const registerLink = document.getElementById('register');
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Register functionality is not implemented yet.');
    });
});