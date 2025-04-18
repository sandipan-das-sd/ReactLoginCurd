import express from 'express';
import { dbConnection } from './db-connection/connection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();
