document.getElementById('generateButton').addEventListener('click', function() {
    const fruits = ['Manzana', 'Banana', 'Cereza', 'Durazno', 'Fresa', 'Uva', 'Kiwi', 'Limón', 'Mango', 'Naranja', 'Papaya', 'Piña', 'Ciruela', 'Frambuesa', 'Sandía'];
    const randomFruits = [];
    
    // Generar 10 frutas aleatorias y guardarlas en el array
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * fruits.length); // Genera un índice aleatorio
        const randomFruit = fruits[randomIndex];
        randomFruits.push(randomFruit);
    }
    
    // Mostrar el resultado en la consola
    console.log(randomFruits);
    
    // Mostrar el resultado en la página web
    document.getElementById('result').textContent = `Frutas aleatorias generadas: ${randomFruits.join(', ')}`;
});
