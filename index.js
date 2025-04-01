const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();
 
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/libros', require('./src/routes/libroRoutes'));

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
