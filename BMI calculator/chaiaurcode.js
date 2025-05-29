const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.5) {
      results.innerHTML += `<p>You are underweight</p>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      results.innerHTML += `<p>You have a normal weight</p>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      results.innerHTML += `<p>You are overweight</p>`;
    } else {
      results.innerHTML += `<p>You are obese</p>`;
    }
    heightInput.value = "";
    weightInput.value = "";
  }
});
