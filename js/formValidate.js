function validateName( ){
    let usname = document.getElementById('name').value ;
    let reg = /^[ a-z A-Z\s]+$/ ;


    if(reg.test(usname))
    {
        document.getElementById('message1').innerHTML = "Verified";
        document.getElementById('message1').style.color = "green";
        return true;
    }
    else{
        document.getElementById('message1').innerHTML = "Failed";
        document.getElementById('message1').style.color = "red";
        return false;
    }
}


function validateEmail( ){
    let email = document.getElementById('email').value ;
    //username@domainname.com  Here the email is divided into 3 groups inside the regex
    let reg = /^([a-zA-Z0-9\.-_]+)@([A-Za-z0-9-_]{2,20})\.([a-z]{2,8})$/ ;
    

    if(reg.test(email))
    {
        document.getElementById('message2').innerHTML = "Verified";
        document.getElementById('message2').style.color = "green";
        return true;
    }
    else{
        document.getElementById('message2').innerHTML = "Failed";
        document.getElementById('message2').style.color = "red";
        return false;
    }
}



const validateNumber = ( ) =>{
    let phnNo = document.getElementById('contactNo').value ;
    let reg =  /^[0-9]{10}$/

    if(reg.test(phnNo))
    {
        document.getElementById('message3').innerHTML = "Verified";
        document.getElementById('message3').style.color = "green";
        return true;
    }
    else{
        document.getElementById('message3').innerHTML = "Failed";
        document.getElementById('message3').style.color = "red";
        return false;
    }
}

// Here it check all the fields are verified if not submit wont work
function validateAll( ){
    validateName( );
    validateEmail( );
    validateNumber( );

    if(validateName( ) && validateEmail( ) && validateNumber( ))
    {
        return true;
    }
    else{
        return false; 
    }
}