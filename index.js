import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "What's your favorite food?",
      choices: [
        {
          name: "choice #1",
          value: "choice1",
          short: "choice1-short",
        },
        {
          name: "choice #2",
          value: "choice2",
          short: "choice2-short",
        },
        {
          name: "choice #3",
          value: "choice3",
          short: "choice3-short",
        },
        {
          name: "choice #3",
          value: "choice3",
          short: "choice4-short",
        },
      ],
      validate: (value) => {
        // If true, the value is valid and the prompt will succeed.
        // If false, the value is invalid and the prompt will show again.
        // Can add logic to check if the input is correct
        return true;
      },
    },
  ])
  .then((answers) => {
    console.log("ANSWERS:");
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
