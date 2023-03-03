
import People from "./People/BasicSearch";
import Works from './Works/BasicSearch';
import AdvancedPeople from "./People/AdvancedSearch";
import AdvancedWorks from './Works/AdvancedSearch';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Search from "../Home/Search";
import Content from './People/Content';
import WorkContent from './Works/Content';



function Index() {
    const [selectedValue, setSelectedValue] = useState('people');
    const [searchData, setSearchData] = useState('');
    const [peopleData, setPeopleData] = useState([]);
    const [worksData, setWorksData] = useState({});

    const [displayNames, setDisplayNames] = useState([]);
    const [displayTitles, setDisplayTitles] = useState([]);


    const fetchData = async () => {
        console.log("basic search useeefect people")
        const displayNamesRes = await fetch("/names");
        var displayNamesJson = await displayNamesRes.json();
        setDisplayNames(displayNamesJson)

        const displayTitlesRes = await fetch("/titles");
        var displayTitlesJson = await displayTitlesRes.json();
        setDisplayTitles(displayTitlesJson)
    };

    useEffect(() => {
        fetchData();
    }, [])


    const handleSelectionChange = (event) => {
        console.log(event.target.value);
        setSelectedValue(event.target.value)
    };

    return (
        <>
            <Box sx={{}}>
                <h2 style={{ textAlign: "center", padding: "20px", color: '#a22828' }}>Search our Database</h2>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="people"
                        onChange={handleSelectionChange}
                    >
                        <FormControlLabel
                            value="people"
                            control={<Radio />}
                            label="People"
                        />
                        <FormControlLabel value="works" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Container>
                    {selectedValue === "people" && <People setSearchData={setSearchData} setPeopleData={setPeopleData}
                        displayNames={displayNames} />}
                    {selectedValue === "works" && <Works setSearchData={setSearchData} setWorksData={setWorksData} 
                        displayTitles={displayTitles} />}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            {<Accordion.Header>Advanced Search</Accordion.Header>}
                            <Accordion.Body>
                                {selectedValue === "people" && <AdvancedPeople setSearchData={setSearchData} setPeopleData={setPeopleData} />}
                                {selectedValue === "works" && <AdvancedWorks setSearchData={setSearchData} setWorksData={setWorksData} />}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
                <Container style={{ padding: "40px" }}>
                    {console.log({ selectedValue })}
                    {searchData === "people" && selectedValue === "people" && <Content data={peopleData} />}
                    {searchData  === "works" && selectedValue === "works" && <WorkContent data={worksData} />}
                </Container>

            </Box>
        </>
    );
}

export default Index;
