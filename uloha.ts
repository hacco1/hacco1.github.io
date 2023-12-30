function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

for (let celsius = 0; celsius <= 100; celsius++) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius} stupňov Celsius = ${fahrenheit.toFixed(2)} stupňov Fahrenheit`);
}