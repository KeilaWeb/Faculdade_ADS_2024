// Seletores
const billInput = document.querySelector('#input-bill');
const peopleInput = document.querySelector('#input-people');
const tipAmountOutput = document.querySelector('#saida-tip-amount');
const totalOutput = document.querySelector('#saida-total');
const inputCustom = document.querySelector('.input-custom');
const resetButton = document.querySelector('#reset');
const valorExtra = document.querySelector('#valor-extra');
const totalCompraOutput  = document.querySelector('#total-compra');
const calculateButton = document.querySelector('#calculateButton');


// Adiciona eventos de entrada
calculateButton.addEventListener('click', handleCalculate);

// Função de manipulação do botão de cálculo
function handleCalculate() {
    // Pega os valores de entrada
    const bill = parseFloat(billInput.value.replace(',', '.'));
    const people = parseInt(peopleInput.value);
    const customTip = parseFloat(inputCustom.value.replace('%', ''));
    const extra = parseFloat(valorExtra.value.replace(',', '.'));

    // Verifica se as entradas são válidas
    if (isNaN(bill) || isNaN(people) || people <= 0) {
        showError();
        return;
    }

    // Verifica se há gorjeta personalizada
    if (!isNaN(customTip) && customTip > 0) {
        calculateTipAndTotal(customTip, bill, people, extra);
    }
}


// Função para calcular a gorjeta e o total
function calculateTipAndTotal(tipPercentage, bill, people, extra) {
    const tip = (bill * tipPercentage) / 100;
    const tipPerPerson = tip / people;
    const totalPerPerson = (bill + tip + extra) / people;
    const totalCompra = bill + tip + extra;

    tipAmountOutput.textContent = `$ ${tipPerPerson.toFixed(2)}`;
    totalOutput.textContent = `$ ${totalPerPerson.toFixed(2)}`;
    totalCompraOutput.textContent = `$ ${totalCompra.toFixed(2)}`;
    
    console.log(totalCompra);
}


// Função para mostrar erro
function showError() {
    tipAmountOutput.textContent = '$ 0.00';
    totalOutput.textContent = '$ 0.00';
    totalCompra.textContent = '$ 0.00';
}

// Função para resetar os campos
resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    inputCustom.value = '';
    tipAmountOutput.textContent = '$ 0,00';
    totalOutput.textContent = '$ 0,00';
    totalCompra.textContent = '$ 0,00';
});


