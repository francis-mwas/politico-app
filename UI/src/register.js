import string from './views/registerView'

console.log(string);

const signUp = document.querySelector('#sign-up');

signUp.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let firstname = document.querySelector('#f_name').value;
    let lastname = document.querySelector('#l_name').value;
    let othername = document.querySelector('#othername').value;
    let email = document.querySelector('#email').value;
    let phoneNumber = document.querySelector('#phone').value;
    let passportUrl = document.querySelector('#passportUrl').value;
    let password = document.querySelector('#password').value;

    let register_url = `${proxy}https://politico-app-api-v1.herokuapp.com/api/v2/auth/signup`

    fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            firstname,
            lastname,
            othername,
            email,
            phoneNumber,
            passportUrl,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.Message)
    })
    .catch(err => console.log(err))
    
}

