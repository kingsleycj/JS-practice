let todoList = [];

console.log("Welcome to the to-do console application!");

const mainMenu = () => {
  let userInput = prompt(
    "What would you like to do?\n1. Add a new to-do\n2. Mark a to-do as complete\n3. View all to-dos\n"
  );
  switch (userInput) {
    case "1":
      let newTodo = prompt("Enter the new to-do:");
      todoList.push(newTodo);
      console.log("To-do added!");
      mainMenu();
      break;
    case "2":
      let index = prompt("Enter the index of the to-do to mark as complete:");
      todoList[index] = `${todoList[index]} (complete)`;
      console.log("To-do marked as complete!");
      mainMenu();
      break;
    case "3":
      console.log("All to-dos:");
      todoList.forEach((todo, index) => {
        console.log(`${index}. ${todo}`);
      });
      mainMenu();
      break;
    default:
      console.log("Invalid choice. Please try again.");
      mainMenu();
      break;
  }
};
mainMenu();
