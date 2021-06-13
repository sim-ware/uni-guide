import express from 'express';
import cors from 'cors';
import { getAllIdNameAndYearRanges } from './services/institutionService'
import { getRatioByInstitutionAndYear } from './services/submissionService'
const app = express();
const PORT = 8000;


app.use(cors());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get('/getAllIdNameAndYearRanges', (_, res) => {
  const filters = getAllIdNameAndYearRanges()
  res.send(filters)
});

app.get('/getRatioByInstitutionAndYear', (req, res) => {
  const id = req.query.id as string
  const year = parseInt(req.query.year as string) 

  if (!id || !year) return res.status(400).send({ message: 'Please supply an Institution ID and Year' });

  res.send(
    getRatioByInstitutionAndYear(id, year)
  )
});
