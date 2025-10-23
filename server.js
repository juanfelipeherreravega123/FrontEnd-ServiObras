// Importar dependencias
const express = require('express');
const path = require('path');
const app = express();

// Puerto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (carpeta 'public')
app.use(express.static(path.join(__dirname, 'FrontEnd-ServiObras/src')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd-ServiObras/src', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
