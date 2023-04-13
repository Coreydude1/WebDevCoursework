highlightNavigation();

//logged In is used to track if the user is logged in
var loggedIn = false;

function highlightNavigation(){
    var elements = document.getElementsByClassName("nav_button");
    for(let element of elements){
        element.addEventListener("mouseover", function(){

            element.style="border: solid 3px #78d0da;background-color: #a2372f;"
            
        });
            
        element.addEventListener("mouseout", function(){
            
            element.style="border: solid 3px #5d1309;"
            
        });
    }
}

function send_form(id, text){
    //Changes html id to have updated text
    document.getElementById(id).innerHTML=text;
}

function attemptLogin(emailId, passwordId){
    //Checks whether the user is currently logged in
    if(!loggedIn){
        //Gets the email the user has entered
        let email = document.getElementById(emailId).value;

        //If the email is blank then displays a welcome message else displays a warning
        if(!email == ""){
            alert("Successful Login.\n\nWelcome :  " + email);
            loggedIn = !loggedIn;
        } else {
            alert("!!!EMAIL NOT FOUND!!!\n\nPlease enter an email to login.");
        }

    } else {
        //Logs the user out
        loggedIn = !loggedIn;
        alert("Successfully Logged Out.")
    }
}