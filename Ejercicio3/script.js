document.getElementById('processButton').addEventListener('click', function() {
    const array = [19, 48, 33, 25, 15, 5];
    
    // Ordenar el array de menor a mayor
    const sortedArray = array.slice().sort((a, b) => a - b);
    
    // Obtener el número menor y el número mayor
    const minValue = sortedArray[0];
    const maxValue = sortedArray[sortedArray.length - 1];
    
    // Mostrar el resultado en la consola
    console.log('Array ordenado:', sortedArray);
    console.log('Número menor:', minValue);
    console.log('Número mayor:', maxValue);
    
    // Mostrar el resultado en la página web
    document.getElementById('sortedArray').textContent = `Array ordenado de menor a mayor: ${sortedArray.join(', ')}`;
    document.getElementById('minValue').textContent = `Número menor: ${minValue}`;
    document.getElementById('maxValue').textContent = `Número mayor: ${maxValue}`;
});
