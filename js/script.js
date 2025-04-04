    function checkNumber(){
    let input = prompt("Enter a number");
    let number = parseInt(input);

    const resultDiv = document.getElementById("result");
    if(isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.style.color = "red";
    } else{
        if(number % 2 === 0) {
            resultDiv.textContent = number + "\nis an Even number";
            resultDiv.style.color = "#2c7";
        } else {
            resultDiv.textContent = number + "\nis an Odd number";
            resultDiv.style.color = "#f66";
        }
    }
  }