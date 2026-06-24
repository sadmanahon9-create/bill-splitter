const billAmount = document.getElementById('billAmount');
const numPeople = document.getElementById('numPeople');
const tipPercentage = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

calculateBtn.onclick = function() {
    const bill = parseFloat(billAmount.value);
    const people = parseInt(numPeople.value);
    const tipPercent = parseFloat(tipPercentage.value);
    const tipType = document.getElementById('tipType').value;

    const tipAmount = tipType === 'percentage' ? bill * (tipPercent / 100) : tipPercent;
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount / people;

    if(bill<0 || people<=0 || tipPercent<0){
        result.innerText = "Please enter valid values for all fields.";
        return;
    }
result.innerText = `Each person should pay: $${amountPerPerson.toFixed(2)}`;
}

resetBtn.onclick = function() {
    billAmount.value = '';
    numPeople.value = '';
    tipPercentage.value = '';
    document.getElementById('tipType').value = 'percentage';
    result.innerText = '';
}