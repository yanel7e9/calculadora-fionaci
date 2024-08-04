function calculateFibonacci() {
    const numberInput = document.getElementById('numberInput').value;
    const n = parseInt(numberInput);

    if (isNaN(n) || n <= 0) {
        alert('Por favor, introduzca un número entero positivo.');
        return;
    }

    const fibonacciSequence = fibonacci(n);
    displayResults(fibonacciSequence);
}

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

function displayResults(sequence) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    sequence.forEach((num, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Fib(${index}) = ${num}`;
        resultList.appendChild(listItem);
    });
}

function clearResults() {
    document.getElementById('numberInput').value = '';
    document.getElementById('resultList').innerHTML = '';
}

function exitProgram() {
    if (confirm('¿Está seguro de que desea salir?')) {
        window.close();
    }
}
