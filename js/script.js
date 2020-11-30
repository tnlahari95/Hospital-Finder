
//login-register page
document.getElementById("register-form").addEventListener('submit', submitform);

//submit contact form
function submitform(e){
    e.preventDefault();
    //Get values
    var email = getInputVal('emailid');
    var password = getInputVal('password');
    var number = getInputVal('mobile number');

    saveMessage(email, password, number);

    //show alert
    document.querySelector('.alert').style.display= 'block';
        //hide alert after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').style.display='none';
        }, 3000);//3 sec
    document.getElementById('register-form').reset();

}
//function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save data to firebase
function saveMessage(email, password, number){
    var newdataRef = messagesRef.push();
    newdataRef.set({
        email: email,
        password: password,
        number: number
    });
}

//loadDoc()



//sub-pages link in the services.html
function myFunction1() 
{
    window.location.assign("generalawareness.html");

}
function myFunction2() 
{
window.location.assign("hospitalfinder.html");

}
function myFunction3() 
{
window.location.assign("covidMetrics.html");

}

//hide th login button
function Hide(HideID)
{
    HideID.style.display = "none";
}


