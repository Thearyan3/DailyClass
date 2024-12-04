function validateForm(){
    let valid = true;
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('ageError').innerText = "";


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    if(name === ""){
        document.getElementById('nameError').innerText = "Name is Required";
        valid = false;
    }
    if(email === ""){
        document.getElementById('emailError').innerText = "email is Required";
        valid = false;
    }
    if(age === ""){
        document.getElementById('ageError').innerText = "Age is Required";
        valid = false;
    }else if(age < 18){
        document.getElementById('ageError').innerText = "Age is not valid. Age must be 18+";
        valid = false;
    }
    return valid;
}
