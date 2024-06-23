function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const numbers = [num1, num2];

    fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numbers })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Summe: ' + data.sum;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Fehler bei der Berechnung';
    });
}
