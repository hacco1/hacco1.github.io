
        function calculateResistance() {
            
            var currentInput = document.getElementById("currentInput").value;

            
            var voltage = 220; 
            var current = currentInput / 1000; 

            
            var resistance = voltage / current;

            
            var resultElement = document.getElementById("result");
            resultElement.innerHTML = "R = " + resistance.toFixed(2) + " ohmov, I = " + currentInput + " mA";
        }