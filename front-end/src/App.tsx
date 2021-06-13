import { useEffect, useState } from 'react';
import './App.css';
import FilterList from './components/FilterList/FilterList'
import { PieChart, Pie } from "recharts";


const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 }
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
                data={data01}
                dataKey="value"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
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
