import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [filters, setFilters] = useState(null);
  const [chartInfo, setChartInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getAllIdNameAndYearRanges')
      .then(response => response.json())
      .then(data => setFilters(data));

    fetch('http://localhost:8000/getRatioByInstitutionAndYear?id=EA8BBED7-4106-94AF-48DD-A1414E386AFB&year=2017') // DONT HARDCODE id & year
      .then(response => response.json())
      .then(data => setChartInfo(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Filter-list-container">
          <p>Filter List</p>
          <p>{JSON.stringify(filters)}</p>
        </div>
        <div className="Visual-data-container">
          <p>Chart Area</p>
          <p>{JSON.stringify(chartInfo)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
