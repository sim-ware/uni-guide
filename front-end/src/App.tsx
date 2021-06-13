import { useEffect, useState } from 'react';
import './App.css';
import FilterList from './components/FilterList/FilterList'
import { PieChart, Pie } from "recharts";


const data = [
  { name: "Staff", value: 400 },
  { name: "Students", value: 300 },
];


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
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
            </PieChart>
          </div>)}
        </div>

      </header>
    </div>
  );
}

export default App;
