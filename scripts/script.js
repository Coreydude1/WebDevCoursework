//When the window first loads it will run highlightNavigation function
highlightNavigation();

//logged In is used to track if the user is logged in
var loggedIn = false;

//Adds a border to the navigation buttons when hovered over
//NOTE does not include the curtrently active button
function highlightNavigation(){
    //Get all buttons
    var buttons = document.getElementsByClassName("nav_button");

    //Loop through all buttons
    for(let button of buttons){
        //Add the mouse over function
        button.addEventListener("mouseover", function(){
            button.style="border: solid 3px #78d0da;background-color: #a2372f;"
        });
            
        //Add the mouse out function
        button.addEventListener("mouseout", function(){
            //Set the border to blend in with the background
            //Makes border invisible and prevents the button from moving during mouseover
            button.style="border: solid 3px #5d1309;"
        });
    }
}

function send_form(id, text){
    //Checks if the user is logged in
    if(loggedIn){
        //Changes html id to have updated text
        document.getElementById(id).innerHTML=text;
    } else {
        //Displays error if the user is not logged in
        alert("Please log in to submit a form.");
    }
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