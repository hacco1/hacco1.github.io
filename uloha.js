"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateResistance = void 0;
function calculateResistance(buttonName) {
    // Získanie hodnoty prúdu zo vstupu
    const currentInput = document.getElementById(buttonName);
    console.log("Value is: ", currentInput.value);
    console.log("Numbered value is: ", Number(currentInput.value));
    // Predpokladané hodnoty napätia a prúdu
    const voltage = 220; // v Voltách
    const current = Number(currentInput.value) / 1000; // prevod z mA na A
    console.log("calculated value: ", current);
    // Výpočet odporu podľa Ohmovho zákona R = U/I
    const resistance = voltage / Number(current);
    console.log("R = " + resistance.toFixed(2) + " ohmov, I = " + currentInput.value + " mA");
    return "R = " + resistance.toFixed(2) + " ohmov, I = " + currentInput.value + " mA";
}
exports.calculateResistance = calculateResistance;
