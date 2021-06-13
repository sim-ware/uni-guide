import { useEffect, useState } from 'react';
import './App.css';
import FilterList from './components/FilterList/FilterList'


function App() {
  const [chartInfo, setChartInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getRatioByInstitutionAndYear?id=EA8BBED7-4106-94AF-48DD-A1414E386AFB&year=2017') // DONT HARDCODE id & year
      .then(response => response.json())
      .then(data => setChartInfo(data));
  }, []);

  const onUniversityChangeHandler = (data: any) => console.log('App.tsx', data) // set local state here to redefine call to chart area
  const onYearChangeHandler = (data: any) => console.log('App.tsx', data)       // set local state here to redefine call to chart area

  return (
    <div className="App">
      <header className="App-header">
        <FilterList 
          onUniversityChange={onUniversityChangeHandler}
          onYearChangeHandler={onYearChangeHandler}
        />
        <div className="Visual-data-container">
          <p>Chart Area</p>
          <p>{JSON.stringify(chartInfo)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
