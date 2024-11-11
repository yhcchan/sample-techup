function checkNumber() { 
    const input = document.getElementById('userInput').value;
    const number = parseFloat(input);
    const resultElement = document.getElementById('result');

    if (isNaN(number)) {
        resultElement.textContent = 'Enter Thine AGE, Dolt!';
    } else if (number > 100) {
        resultElement.textContent = 'Thou Art a Wizard!';
    } else if (number > 45) {
        resultElement.textContent = 'Thou Art a Codger!';
    } else {
        resultElement.textContent = 'Thou Art Still in the Springtime of Thine Life!';   
    }
}