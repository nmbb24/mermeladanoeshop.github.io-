const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Puedes cambiar el número de puerto si es necesario

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
