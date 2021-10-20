function signUpFunction(){
    const message = document.getElementById("message");
    const passMesssage = document.getElementById("passwordMessage");

    const myname = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // create Person class to store data
    class Person {
        constructor(name, email, password){
            this.name =  name,
            this.email = email,
            this.password = password 
        }
    }
    // minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // check if the form if filled
    if(myname.value == ""){
        myname.style.border = "2px solid #67755e"
    }
    else  myname.style.border = "none"

    if(email.value == ""){
        email.style.border = "2px solid #67755e"
    }
    else email.style.border = "none"

    if(password.value == "" || reg.test(password.value) == false){
        password.style.border = "2px solid #67755e"
        passMesssage.innerText = "Must have at least 8 characters: \n 1 digit (0 - 9) \n 1 uppercase and 1 lowercase letter"
    }
    else {
        password.style.border = "none"
        passMesssage.innerText = ""
    }

    // add data to person and display it
    if(myname.value != "" & reg.test(password.value) & email.value != "") {
        const newperson = new Person(myname.value, email.value, password.value)
        console.log(newperson)
        message.innerText = "Thank You!"
    }
    else {
        message.innerText = "Please Fill the Form!"
    }

    console.log(reg.test(password.value))
}




