function calculateResistance(voltage: number, current: number): number {
    return voltage / (current / 1000); 
}

function printValues(resistance: number, current: number): void {
    console.log(`R = ${resistance.toFixed(2)} Ohms, I = ${current.toFixed(2)} mA`);
}

function main(): void {
    const voltage: number = 220; 
    
    
    for (let i = 1; i <= 20; i++) {
        const current: number = i; 
        const resistance: number = calculateResistance(voltage, current);
        printValues(resistance, current);
    }
}


main();