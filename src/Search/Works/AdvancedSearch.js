import * as React from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


export default function AdvancedSearch({ setSearchData, setWorksData }) {

  const [workFormats, setWorkFormats] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [workClassifications, setWorkClassifications] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [places, setPlaces] = useState([]);
  const [displayTitles, setDisplayTitles] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [search, setSearch] = useState(false);

  const [selectedWorkFormats, setSelectedWorkFormats] = useState();
  const [selectedLanguages, setSelectedLanguages] = useState();
  const [selectedWorkClassifications, setSelectedWorkClassifications] = useState();
  const [selectedPlaces, setSelectedPlaces] = useState();


  const handleSearch = async () => {
    setSearch(true);
    let url = 'advancedSearch/works?';
    if (selectedWorkFormats != null) url += `&wFormat=${selectedWorkFormats}`
    if (selectedLanguages != null) url += `&language=${selectedLanguages}`
    if (selectedWorkClassifications != null) url += `&wClassification=${selectedWorkClassifications}`
    if (selectedPlaces != null) url += `&place=${selectedPlaces}`

    console.log({ url })
    const workRes = await fetch(url);
    const worksJson = await workRes.json();
    setWorksData(worksJson);
    const langArr = worksJson.map((e) => {
      return (
        e.languages.map((l) => {
          const item = languages.find(item => 
            {console.log(item.id, l); return item.id === l});
          return item ? item.name : ''
        }
        )

      )

    })
    console.log("Work data", langArr);
    setSearchData('works');

  };


  const fetchData = async () => {
    const workFormatRes = await fetch("/work_formats");
    const workFormatJson = await workFormatRes.json();
    console.log("I'm in fetchGenders");
    setWorkFormats(workFormatJson);

    const languages = await fetch("/languages");
    const languagesJson = await languages.json();
    setLanguages(languagesJson)

    const workClassificationsRes = await fetch("/work_classifications");
    const workClassificationsJson = await workClassificationsRes.json();
    setWorkClassifications(workClassificationsJson);

    const placesRes = await fetch("/places");
    const placesJson = await placesRes.json();
    setPlaces(placesJson);

  };


  useEffect(() => {
    fetchData();
  }, []);


  const [bardicChecked, setBardicChecked] = React.useState(false);

  const handleBardicChange = (event) => {
    setBardicChecked(event.target.checked);
  };


  return (
    <>
      {
        [
          {
            options: workFormats,
            label: "Work Formats",
            fun: setSelectedWorkFormats
          },
          {
            options: languages,
            label: "Language",
            fun: setSelectedLanguages
          },
          {
            options: workClassifications,
            label: "Work Claasification",
            fun: setSelectedWorkClassifications
          },
          {
            options: places,
            label: "Place",
            fun: setSelectedPlaces
          }
        ].map(item =>
          <Autocomplete
            id="auto-complete"
            options={item.options}
            getOptionLabel={(option) => option.name || ""}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label={item.label} variant="standard" />
            )}
            onChange={(event, value) => item.fun(value.id)}
          />
        )
      }


      <FormGroup className="FormBardic">
        <FormControlLabel control={<Checkbox checked={bardicChecked}
          onChange={handleBardicChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />}
          label="Bardic poem" />
      </FormGroup>



      {/* <div className="DateRange">
            <div className="DateRangeLabel">Date Range</div>
            <TextField
              id="standard-search"
              label="From"
              type="search"
              variant="standard"
              size="small"
            />
            <div className="DateRangeHyphen">-</div> <TextField
              id="standard-search"
              label="To"
              type="search"
              variant="standard"
              size="small"
            />
          </div> */}


      <Button variant="outlined" onClick={handleSearch}>Search</Button>
      {/* {search && <ContentBar data={workData} />} */}
    </>
  );
}
