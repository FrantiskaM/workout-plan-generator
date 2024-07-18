function generatePlan(event) {
  event.preventDefault();

  new Typewriter("#plan", {
    strings: "Plan will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let planFormElement = document.querySelector("#workout-plan-generator-form");
planFormElement.addEventListener("submit", generatePlan);
