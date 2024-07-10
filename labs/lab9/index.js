const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

// Función para generar la serie de Fibonacci
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Endpoint para obtener la serie de Fibonacci
app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number <= 0) {
        return res.status(400).json({ error: 'El número debe ser un entero positivo.' });
    }
    const result = generateFibonacci(number);
    res.json(result);
});

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname)));

// Endpoint para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
