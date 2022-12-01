var r1 = require("readline");
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter your Name: ", function(username){
    prompts.question("Enter your age: ", function(userage){
        prompts.question("Enter your Email: ", function(emailId){
            prompts.question("Enter your phone number: ", function(mobile){
                var message = "";
                if (userage > 18 ){
                    message = "\n\n Thank You ! " + username + "\n\n you can sign in." +
                    "\n\n Username                 : " + username + 
                    "\n\n Age                           : " + userage + 
                    "\n\n Email ID                  : " + emailId + 
                    "\n\n Phone Number           : " + mobile ;
                } else {
                    message = " Minimum required is 18 years and your age is " + userage + " , you should wait at least " + (18-userage) + " year(s) more";
                }
                console.log(message);
            })
        })
    })
});