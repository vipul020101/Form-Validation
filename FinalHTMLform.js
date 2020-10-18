function validateFirstName() { /*function for validation of first name with (if- else) */
    var fname = document.getElementById("name1").value;
    var regex1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if(regex1.test(fname)) {
        document.getElementById("firstNamePrompt").style.color ="green";
        document.getElementById("firstNamePrompt").innerHTML= "valid";
        return true;
    }

    else {
        document.getElementById("firstNamePrompt").style.color ="red";
        document.getElementById("firstNamePrompt").innerHTML = "invalid";
        return false;

    }
    
}

function validateLastName() { /*fucntion for validation of last name using (if-else) */
    var lname = document.getElementById("name2").value;
    var regex2 = /^[a-zA-Z\s\'\-]{2,25}$/;

    if(regex2.test(lname)) {
        document.getElementById("lastNamePrompt").style.color ="green";
        document.getElementById("lastNamePrompt").innerHTML = "valid";
        return true;
    }

    else {
        document.getElementById("lastNamePrompt").style.color ="red";
        document.getElementById("lastNamePrompt").innerHTML = "invalid";
        return false;

    }
}

function validatePhone() { /*function for validation of phone number */
    var phonenum = document.getElementById("phone").value;
    var regex3 = /^\d{3}-\d{3}-\d{4}$/;

    if (regex3.test(phonenum)) {
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phoneprompt").innerHTML = "valid";
        return (true);
    }

    else {
        document.getElementById("phonePrompt").style.color = "red";
        document.getElementById("phonePrompt").innerHTML = "use xxx-xxx-xxxx";
        return (false);
    }
}

function checkField2() { /* function for age validation*/
    var field = document.getElementById("field2").value;
    var regex = /^[12-9-7]{1,2}$/;

    if(regex.test(field))
       document.getElementById("message2").innerHTML = "valid";
    else
       document.getElementById("message2").innerHTML = "invalid!";

}

function watchTime() { /* fucntion for validation of SCREEN-TIME*/
    var field = document.getElementById("time1").value;
    var regex = /^[12-9-7]{1}$/;

    if(regex.test(field))
       document.getElementById("info1").innerHTML = "GOOD!";
    else
       document.getElementById("info1").innerHTML = "REDUCE YOUR SCREEN TIME";

}