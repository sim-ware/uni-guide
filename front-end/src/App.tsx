import { useEffect, useState } from 'react';
import './App.css';
import FilterList from './components/FilterList/FilterList';
import ChartArea from './components/ChartArea/ChartArea';


function App() {
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState(0);
  const [chartInfo, setChartInfo] = useState(null);

  useEffect(() => {
    if (!year || !university) return
    
    fetch(`http://localhost:8000/getRatioByInstitutionAndYear?id=${university}&year=${year}`)
      .then(response => response.json())
      .then(data => setChartInfo(data));
    
  },[year, university])

  const onUniversityChangeHandler = (university: string) => {
    setUniversity(university)
  }
  
  const onYearChangeHandler = (year: number) => {
    setYear(year)
  }

  return (
    <div className="App">
      <header className="App-header">

        <FilterList 
          onUniversityChangeHandler={onUniversityChangeHandler}
          onYearChangeHandler={onYearChangeHandler}
        />

        <div className="Visual-data-container">
          <p>Chart Area</p>

          {!university || !year  || !chartInfo ? 
          <p>Please select a University and then Year</p> :
          // @ts-ignore 
          <ChartArea chartInfo={chartInfo}/>}

        </div>

      </header>
    </div>
  );
}

export default App;
