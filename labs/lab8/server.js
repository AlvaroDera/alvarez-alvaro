const express = require('express');
const app = express();
const port = 3000;

// Simulando una base de datos en memoria
let ingresos = [];
let egresos = [];

// Middleware para parsear JSON
app.use(express.json());

// Controlador para almacenar ingresos
app.post('/api/ingresos', (req, res) => {
  const ingreso = req.body;
  ingresos.push(ingreso);
  res.status(201).send({ message: 'Ingreso almacenado', data: ingreso });
});

// Controlador para leer ingresos
app.get('/api/ingresos', (req, res) => {
  res.json(ingresos);
});

// Controlador para almacenar egresos
app.post('/api/egresos', (req, res) => {
  const egreso = req.body;
  egresos.push(egreso);
  res.status(201).send({ message: 'Egreso almacenado', data: egreso });
});

// Controlador para leer egresos
app.get('/api/egresos', (req, res) => {
  res.json(egresos);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
