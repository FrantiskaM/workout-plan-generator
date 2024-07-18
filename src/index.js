function displayPlan(response) {
  console.log("plan generated");
  new Typewriter("#plan", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePlan(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o5ea5d7b5d6e56d8c97c0faeb8283t04";
  let prompt = `User instructions: Generate ${instructionsInput.value} workout plan`;
  let context =
    "You are a fitness Plan expert and you love to plan workout sessions. Your mission is to generate a plan basic HTML. Make sure to follow the user instructions. Sign the plan with 'Created by SheCodes AI' writed in cursive and bold";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating plan");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPlan);
}

let planFormElement = document.querySelector("#workout-plan-generator-form");
planFormElement.addEventListener("submit", generatePlan);
