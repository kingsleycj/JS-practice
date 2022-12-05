const catalog = [
  ["iPhone 11", 320],
  ["Samsung Galaxy s10", 250],
  ["Xiaomi Redmi note 9", 200],
  ["Tecno Camon 16", 160],
  ["Infinix Note 10", 90],
  ["LG nexus", 220],
];

const print = (message) => {
  console.log(message);
};

const printList = (items) => {
  let list = "\n***************************************\n";
  for (let i = 0; i < items.length; i++) {
    list += "\n[" + items[i][0] + " costs " + "$" + items[i][1] + "]\n";
  }
  list += "\n***************************************\n";
  print(list);
};

let r1 = require("readline");
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter your Name: ", function (username) {
    print(`Hi ${username}, Welcome to Kingsley\'s store`);
    print(`\nHere are the list and prices of our Phone Catalog: `);
    printList(catalog);
  prompts.question(
    "\nSelect the device you'd like to add to your shopping cart:  ",
    function (selectedItem) {
      prompts.question("Enter your Email Address: ", function (email) {
        prompts.question("Enter your Contact Address: ", function (address) {
          prompts.question(
            "Enter your Phone Number\n(make sure its 11 digits): ",
            function (mobile) {
              let message = "";
              if (mobile.length >= 10) {
                message =
                  "\n\n Thank You! " +
                  username +
                  "\n\n Your details have been stored,  You can make your payment and expect delivery in 2 day(s)" +
                  "\n\n-------------------------------------------------" +
                  "\n\n Username              : " +
                  username +
                  "\n\n Email                 : " +
                  email +
                  "\n\n Contact Address       : " +
                  address +
                  "\n\n Phone Number          : " +
                  mobile +
                  "\n\n-------------------------------------------------";
              } else {
                message =
                  "Your Phone number is " +
                  mobile +
                  " , and its not up to 11 digits, please restart and input 11  digits of your phone number ";
              }
              console.log(message);
            }
          );
        });
      });
    }
  );
});
