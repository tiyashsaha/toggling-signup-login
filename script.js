const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('hyvnorSignup').addEventListener('click', () => {
    // Replace with Hyvnor signup logic
    alert('Sign up with Hyvnor');
});

document.getElementById('hyvnorLogin').addEventListener('click', () => {
    // Replace with Hyvnor login logic
    alert('Login with Hyvnor');
});
