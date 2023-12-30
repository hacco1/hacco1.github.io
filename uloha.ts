export function vypisatVysledok(resultName: string, buttonName: string) {
  const currentInput = document.getElementById(buttonName) as HTMLInputElement;

  const resultParagraph = document.getElementById(resultName);

  if (resultParagraph !== null) {
    resultParagraph.innerHTML =
      celsiusToFahrenheit(Number(currentInput.value)).toFixed(2) +
      " °F";
  } else {
    console.error("Did not find element: ", resultName);
  }
}

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

for (let celsius = 0; celsius <= 100; celsius++) {
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(
    `${celsius} stupňov Celsius = ${fahrenheit.toFixed(2)} stupňov Fahrenheit`
  );
}
