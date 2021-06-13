import { useEffect, useState } from 'react';
import './App.css';
import FilterList from './components/FilterList/FilterList'


function App() {
  const [university, setUniversity] = useState(null);
  const [year, setYear] = useState(null);
  const [chartInfo, setChartInfo] = useState(null);

  useEffect(() => {
    if (!year || !university) return
    
    fetch(`http://localhost:8000/getRatioByInstitutionAndYear?id=${university}&year=${year}`)
      .then(response => response.json())
      .then(data => setChartInfo(data));
    
  },[year, university])

  const onUniversityChangeHandler = (data: any) => {
    setUniversity(data)
  }
  
  const onYearChangeHandler = (data: any) => {
    setYear(data)
  }

  return (
    <div className="App">
      <header className="App-header">

        <FilterList 
          onUniversityChange={onUniversityChangeHandler}
          onYearChangeHandler={onYearChangeHandler}
        />

        <div className="Visual-data-container">
          <p>Chart Area</p>
          {!university || !year ? 
          <p>Please select a University and then Year</p> : 
          (<div>
            <p>{university}</p>
            <p>{year}</p>
            <p>{JSON.stringify(chartInfo)}</p>
          </div>)}
        </div>

      </header>
    </div>
  );
}

export default App;
