function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;
    const bmi = (weight / (height * height)).toFixed(2);

    let resultText = `Your BMI is ${bmi}. You are `;
    if (bmi < 18.5) {
        resultText += "underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "in the normal weight range.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "overweight.";
    } else {
        resultText += "obese.";
    }

    document.getElementById('bmi-result').innerText = resultText;
}
