import * as React from "react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';

export default function AdvancedSearch( {setSearchData, setPeopleData }) {

  const [genders, setGenders] = useState([]);
  const [rDesignations, setRDesignations] = useState([]);
  const [rOrders, setROrders] = useState([]);
  const [rSubTypes, setRSubTypes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [roleAttribs, setRoleAttribs] = useState([]);
  const [search, setSearch] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedRDesignations, setsSelectedRDesignations] = useState([]);
  const [selectedROrder, setSelectedROrder] = useState();
  const [selectedAttribs, setSelectedAttribs] = useState([]);
  const [selectedRSubtype, setSelectedRSubtype] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);


  const handleSearch = async () => {
    setSearch(true);
    let url = 'advancedSearch/people?';
    if (selectedGender != null) url += `gender=${selectedGender}`
    if (!(selectedRSubtype && selectedRSubtype.length === 0)) url += `&rSubtypes=${selectedRSubtype}`
    if (selectedROrder != null) url += `&rOrder=${selectedROrder}`
    if (!(selectedAttribs && selectedAttribs.length === 0)) url += `&attribs=${selectedAttribs}`

    console.log({url})
    const peopleRes = await fetch(url);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    console.log("People data", peopleJson);
    setSearchData('people');

  };


  const fetchData = async () => {
    const res = await fetch("/genders");
    const resJson = await res.json();
    console.log("I'm in fetchGenders");
    setGenders(resJson);

    const rDesignation = await fetch("/religious_designations");
    const rDesignationJson = await rDesignation.json();
    setRDesignations(rDesignationJson);

    const rOrders = await fetch("/religious_orders");
    const rOrdersJson = await rOrders.json();
    setROrders(rOrdersJson);

    const rSubTypes = await fetch("/religious_subtypes");
    const rSubTypesJson = await rSubTypes.json();
    setRSubTypes(rSubTypesJson);

    const roles = await fetch("/roles");
    const rolesJson = await roles.json();
    setRoles(rolesJson);

  };

  const onRoleChange = async (e, v) => {
    console.log(v.length)
    // if(v.length < 0) {
    //   console.log("inside length")
    //   setRoleAttribs([]);
    // }
    console.log("id", e, v[0].id);
    const attribsRes = await fetch(`/attribs/roles/${v[0].id}`);
    console.log(attribsRes)
    const attribsJson = await attribsRes.json();
    setRoleAttribs(attribsJson);
  }


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>

      {
        [
          {
            options: genders,
            fun: setSelectedGender,
            label: "Gender"
          },
          {
            options: rDesignations,
            fun: setsSelectedRDesignations,
            label: "Religious Designation"
          },
          {
            options: rOrders,
            fun: setSelectedROrder,
            label: "Religious Order"
          }
        ].map(item =>
          <Autocomplete
            filterSelectedOptions
            options={item.options}
            id="auto-complete"
            autoComplete
            getOptionLabel={(option) => option.name || ""}
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label={item.label} variant="standard" />
            )}
            onChange={(event, value) => item.fun(value.id)}
          />)
      }

      <Autocomplete
        id="auto-complete"
        multiple
        options={rSubTypes}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="Religious Subtype"
            variant="standard"
          />
        )}
        onChange={(event, value) => setSelectedRSubtype(value[0].id)}
      />

      <Autocomplete
        id="auto-complete"
        multiple
        options={roles}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Roles" variant="standard" />
        )}
        onChange={(event, value) => onRoleChange(event, value)}
      />

      {roleAttribs && <Autocomplete
        id="auto-complete"
        multiple
        options={roleAttribs}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Attributes" variant="standard" />
        )}
        onChange={(event, value) => setSelectedAttribs(value[0].id)}
      />}

      {<Button variant="outlined" onClick={handleSearch}>Search</Button>}

    </>
  );
}
