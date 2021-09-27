require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.NODE_PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With , X-Auth-Token',);
  next();
});

const mutant = require('./components/mutant/Routers');
app.use('/mutant',mutant)

const app_process = require('http').createServer(app);
try {
    if (process.env.NODE_ENV !== 'unittest') {
        app_process.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`)
      });
    }
  } catch (e) {
    console.log(`Error al encender el servidor en el puerto ${port}`, { error: e.message });
  }