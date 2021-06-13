import express from 'express';

const app = express();
const PORT = 8000;
app.get('/', (_, res) => res.send('Uni Guide Express + TypeScript Server ⚡️'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});