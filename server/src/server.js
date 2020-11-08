const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const dbPath = process.env.DB_PRODUCTION_URL;

const server = express();

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(3333);