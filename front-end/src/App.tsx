import { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [filters, setFilters] = useState(null);
  const [chartInfo, setChartInfo] = useState(null);
  const [age, setAge] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/getAllIdNameAndYearRanges')
      .then(response => response.json())
      .then(data => setFilters(data));

    fetch('http://localhost:8000/getRatioByInstitutionAndYear?id=EA8BBED7-4106-94AF-48DD-A1414E386AFB&year=2017') // DONT HARDCODE id & year
      .then(response => response.json())
      .then(data => setChartInfo(data));
  }, []);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Filter-list-container">
          <p>Filter List</p>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
