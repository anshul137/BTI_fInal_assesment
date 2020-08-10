 
function totalvalidation(){
    
   var err = document.getElementsByClassName("err");
   for(var i =0; i <5;i++){
    err[i].innerHTML= "";

   }
  
   var password = document.forms["signup"]["pswd"].value;
   var confirmpassword = document.forms["signup"]["cpswd"].value;
   var username = document.forms["signup"]["username"].value;

test = true; 
if(password.length<6 || !/\d/.test(password) || !/^[a-zA-Z]/.test(password) || !/[A-Z]/.test(password))
{
   
    var err = document.getElementsByClassName("err");
    for(i=0;i<5;i++){
        if(err[i].innerHTML === "")
        {
            err[i].innerHTML = "Password must be: 6 Character long, start with alphabet, contains 1 digit and 1 uppercase";
            break;
        }
    }
    test = false
}

if (password !== confirmpassword) {
    var err = document.getElementsByClassName("err");
    for(i=0;i<5;i++){
        if(err[i].innerHTML === ""){
            err[i].innerHTML = "Password didn't matched!";
            break;
        }
    }
    test = false
}
if (username.length<6 || !/^[a-zA-Z]/.test(password)) {
    var err = document.getElementsByClassName("err");
    for(i=0;i<5;i++){
        if(err[i].innerHTML === ""){
            err[i].innerHTML = "Username must be: 6 character long and start with alphabet!";
            break;
        }
    }
    test = false
}


if (test == false)
{

    return false

}


}  
function clearError(){
    document.querySelector('#errors').innerHTML = "";

}