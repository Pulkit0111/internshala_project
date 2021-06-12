function studentSignup() {
   // e.preventDefault()
    
    let email = document.getElementById('email').value

    let password = document.getElementById('password').value

    let firstName = document.getElementById('first_name').value

    let lastName = document.getElementById('last_name').value

    let studentSignupObj = {
        email,
        password,
        firstName,
        lastName,
    }

    /*show error if any field is empty*/

    if (email == '' || password == '' || firstName == '' || lastName == '') {
        alert("please fill all the fields")
    }
}