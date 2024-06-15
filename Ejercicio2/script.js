document.getElementById('convertButton').addEventListener('click', function() {
    const userInput = prompt('Ingrese varias palabras o números separados por comas:');
    
    if (userInput) {
        const arrayResult = userInput.split(',').map(item => item.trim());
        
       
        console.log(arrayResult);
        
    
        alert(`El array resultante es: [${arrayResult.join(', ')}]`);
    } else {
        alert('No ingreso ningún dato.');
    }
});
