import { useEffect, useState } from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function FilterList(props: any) {
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
  const [university, setUniversity] = useState('');
  const [year, setYear] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/getAllIdNameAndYearRanges')
      .then(response => response.json())
      .then(data => setFilters(data));
  }, []);

  const handleUniversityChange = (event: any) => {
    setUniversity(event.target.value);
    props.onUniversityChange(event.target.value);
  };

  const handleYearChange = (event: any) => {
    setYear(event.target.value);
    props.onYearChangeHandler(event.target.value);
  };

  const UniversityDropdown = () => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel>University</InputLabel>
        <Select value={university} onChange={handleUniversityChange}>
          {filters.map((filter: any) => {
            return <MenuItem value={filter.id}>{filter.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    )
  }

  const YearDropdown = () => {
    const options: number[] = filters.filter((uni: any) => uni.id === university)[0]['yearRange']

    return (
      <FormControl className={classes.formControl}>
        <InputLabel>Year</InputLabel>
        <Select value={year} onChange={handleYearChange}>
          {options.map((option: number) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    )
  }

  return (
    <div className="Filter-list-container">
        <p>Filter List</p>
        <UniversityDropdown />
        
        {university !== '' ? 
        <YearDropdown /> : 
        <p>Please select a University</p>}

    </div>
  );
}

export default FilterList;
