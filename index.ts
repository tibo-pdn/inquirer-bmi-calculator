import inquirer from "inquirer";
import { calculateBMI, getBMICategory } from "./bmi.js";
// TODO - Add chalk package (?)

console.log("---------- Welcome to the BMI calculator! ----------");

await inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default: "John Doe",
      validate: (value): string | boolean => {
        if (!value.length) {
          return "Please enter your name to proceed.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "height",
      message: "How tall are you? (in cm)",
      default: "170",
      transformer: (value): string => {
        return `${value} cm`;
      },
      validate: (value): string | boolean => {
        if (
          value === "" ||
          isNaN(value) ||
          parseInt(value) <= 0 ||
          parseInt(value) >= 272
        ) {
          return "Please enter a valid number between 0 and 272.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "weight",
      message: "How much do you weigh? (in kg)",
      default: "70",
      transformer: (value): string => {
        return `${value} kg`;
      },
      validate: (value): string | boolean => {
        if (
          value === "" ||
          isNaN(value) ||
          parseInt(value) <= 0 ||
          parseInt(value) >= 727
        ) {
          return "Please enter a valid number between 1 and 727.";
        }
        return true;
      },
    },
  ])
  .then((answers): void => {
    const bmi: string = calculateBMI(answers.weight, answers.height);
    const category: string = getBMICategory(bmi);
    console.log(
      `Hello ${answers.name}! Your BMI is ${bmi} and is considered as ${category}.`,
    );
  });
