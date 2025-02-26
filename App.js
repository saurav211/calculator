document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const buttons = document.querySelectorAll(".button");
    const delButton = document.getElementById("DEL");
    const resetButton = document.querySelector(".reset");
    const equalsButton = document.querySelector(".equals");

    
    function updateInput(value) {
        const lastChar = inputField.value.slice(-1);

        
        if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
            return;
        }

        inputField.value += value;
    }

    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.innerText;
            if (value !== "RESET" && value !== "=" && value !== "DEL") {
                updateInput(value);
            }
        });
    });

    
    delButton.addEventListener("click", function () {
        inputField.value = inputField.value.slice(0, -1);
    });

    
    resetButton.addEventListener("click", function () {
        inputField.value = "";
    });

    
    equalsButton.addEventListener("click", function () {
        try {
            if (inputField.value.trim() === "") {
                return; 
            }

            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = "Error";
        }
    });
});
