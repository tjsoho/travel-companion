const signupBtn = document.querySelector('#signup');


const moveToSignup = () => {
    document.location.replace('/signup');
};

signupBtn.addEventListener('click', moveToSignup);