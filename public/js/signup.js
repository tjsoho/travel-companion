const signupFormHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#user_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (user_name && email && password) {
        // api router need to check 
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ user_name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // api router need to check: must go user page 
            document.location.replace('/login');
        } else {
            alert('Failed to sing up');
        }
    }
};

document
    .querySelector('.singup-form')
    .addEventListener('submit', signupFormHandler);