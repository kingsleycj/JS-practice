var r1 = require("readline");
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter your Name: ", function(username){
    prompts.question("Enter your age: ", function(userage){
        prompts.question("Enter your Contact Address: ", function(address){
            prompts.question("Enter your phone number: (make sure its 11 digits) ", function(mobile){
                var message = "";
                if (mobile.indexOf(mobile) > 10){
                    message = "\n\n Thank You! " + username + "\n\n Your details have been stored,  You can make your payment and expect delivery in 2 day(s)" +
                    "\n\n Username                 : " + username + 
                    "\n\n Age                           : " + userage + 
                    "\n\n Contact Address                  : " + address + 
                    "\n\n Phone Number           : " + mobile ;
                } else {
                    message = "Your Phone number is " + mobile + " , and its not up to 11 digits, please restart and input 11  digits of your phone number ";
                }
                console.log(message);
            })
        })
    })
});