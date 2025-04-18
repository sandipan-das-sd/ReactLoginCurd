import express from 'express';
import { dbConnection } from './db-connection/connection.js';
import mainRouter from './routes/index.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',mainRouter)
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();
