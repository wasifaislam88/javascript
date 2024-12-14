

//problem2.......>


function sendNotification(email){


    if(email.indexOf ('@')===-1){

        return "invalid email"
    }

    else{
        const parts = email.split('@');

        const username = parts [0];
        const domainname = parts[1];  
    
    
      return  username + ' sent you an email from ' + domainname
    }

}


console.log(sendNotification("fahim234.hotmail.com"));

// console.log(emailNotification("invalid email"));





