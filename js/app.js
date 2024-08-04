/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "https://ahmed-menisy.github.io/Quizz/assets/particles.json", function () {
   console.log("callback - particles.js config loaded");
   
});


let singInEmail = document.getElementById('signEmail');
let signInPassword = document.getElementById('signPassword');



document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        checkUser();
    }
})

function validationName(){
let text =singInEmail.value;
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let msgEmail = document.getElementById("msgName")

if(regex.test(text)  == true){
  singInEmail.classList.add("is-valid")
  singInEmail.classList.remove("is-invalid")
  msgEmail.classList.add('d-none')
}else
{
  singInEmail.classList.add("is-invalid");
  singInEmail.classList.remove("is-valid");
  msgEmail.classList.remove('d-none')
}
}

function validationPassword(){
  let pass =signInPassword.value;
  let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  let msgPass = document.getElementById("msgPass")

  
  if(regex.test(pass)  == true){
    signInPassword.classList.add("is-valid")
    signInPassword.classList.remove("is-invalid")
    msgPass.classList.add('d-none')
  
  }else
  {
    signInPassword.classList.add("is-invalid");
    signInPassword.classList.remove("is-valid");
    msgPass.classList.remove('d-none')
  }
  }