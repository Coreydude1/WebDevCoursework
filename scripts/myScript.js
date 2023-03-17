function send_form(id, text){
    document.getElementById(id).innerHTML=text;
}

var loggedIn = false;

function attemptLogin(emailId, passwordId){
    if(!loggedIn){
        let email = document.getElementById(emailId).value;

        if(!email == ""){
            alert("Successful Login.\n\nWelcome :  " + email);
            loggedIn = !loggedIn;
        } else {
            alert("!!!EMAIL NOT FOUND!!!\n\nPlease enter an email to login.");
        }

    } else {
        loggedIn = !loggedIn;
        alert("Successfully Logged Out.")
    }
}

