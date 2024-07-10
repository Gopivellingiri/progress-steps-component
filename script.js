/* const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;
const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");

    progressBar.style.width = `${
      ((currentStep - 1) / (circles.length - 1)) * 100
    }%`;
  });

 if (currentStep === circles.length) {
    buttons[1].disabled = true;
 } else if (currentStep === 1) {
    buttons[0].disabled = true
 } else {
    buttons.forEach(button => button.disabled = false)
 }

};

buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
 */

const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateCircles = () => {
  circles.forEach((circle, index) => {
    circle.classList[index < currentStep ? "add" : "remove"]("active");
  });
};

const updateProgressBar = () => {
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
};

const updateButtons = () => {
  buttons.forEach(button => button.disabled = false); // Enable all buttons first

  if (currentStep === circles.length) {
    buttons[1].disabled = true; // Disable 'Next' button
  }

  if (currentStep === 1) {
    buttons[0].disabled = true; // Disable 'Previous' button
  }
};

const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  updateCircles();
  updateProgressBar();
  updateButtons();
};

buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});

updateButtons(); // Initial button state update
