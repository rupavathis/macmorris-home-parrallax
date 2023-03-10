import React, { useEffect, useState, useCallback } from 'react';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import Roles from './ContentBar/Roles.js';
import './home.css';
import { useNavigate } from 'react-router-dom'

function Home() {
  // console.log("ID", id)
  // if (id == null)
  // id = 3190;
  // id = 150;
  const [id, setId] = useState(-1);


  const [authorName, setAuthorName] = useState("");
  const history = useNavigate()


  useEffect(() => {
    console.log("In profile page")

    if (document.URL.includes('/profile')) {
      const url = document.URL;
      const id = url.substring(url.lastIndexOf('/') + 1);
      console.log(id, id);
      setId(id);
    }
    console.log(id);
  }, [history])

  useEffect(() => {
    if (id != -1) {
      fetchData(id);

    }
  }, [id]);

  const [bioInfo, setBioInfo] = useState([]);
  const [roles, setRoles] = useState([]);
  const [sources, setSources] = useState([]);
  const [works, setWorks] = useState([]);
  const [connections, setConnections] = useState([]);

  const fetchData = useCallback(async (id) => {
    const url = `/profile/${id}`
    console.log({url})
    const res = await fetch(url);
    console.log({res});

    const resJson = await res.json();
    setBioInfo(resJson);
    setAuthorName(resJson.display_name)
    console.log({resJson});
    const attrib = resJson.attribs;
    console.log({attrib});

    const roles = await attrib.map((a) => { return a.name });
    // const roles = "summa"
    setRoles(roles);
    console.log(roles);
    const sources = [];
    sources.push(resJson.odnb_id);
    sources.push(resJson.dib_id);
    sources.push(resJson.tnop_id);
    sources.push(resJson.wikidata_id);
    sources.push(resJson.ainm_id);
    sources.push(resJson.sdfb);
    // console.log(sources);
    setSources(sources);

    const workRes = await fetch(`/people/${id}/works`);
    const workResJson = await workRes.json();
    console.log(workResJson);


    let worksRes = workResJson.reduce((ac, a) => ac.find(x => x.id === a.id) ? [...ac] : [...ac, a], []);
    setWorks(worksRes)


    const connectionsRes = await fetch(`/people/${id}/connections`);
    const connectionsResJson = await connectionsRes.json();
    // const filteredIDs = connectionsResJson.map((c) => {
    //   let filterIDs = [];
    //   if (c.source_id.id == id) {
    //     filterIDs.id = c.target_id.id;
    //     filterIDs.name = c.target_id.name;
    //   }
    //   if (c.target_id.id == id) {
    //     filterIDs.id = c.source_id.id;
    //     filterIDs.name = c.source_id.name;
    //   }
    //   filterIDs.rel_type = c.relationship_types[0].name
    //   return filterIDs;
    // }).filter(e => e !== '');
    // // const uniqueFilteredIDs = [...new Set(filteredIDs?.id)]

    // const uniqueFilteredIDs = filteredIDs.filter((thing, index, self) =>
    //   index === self.findIndex((t) => (
    //     t.id === thing.id 
    //   ))
    // )

    // const connectionsData = connectionsResJson.filter(e => e.source_id.id != filteredIDs);


    console.log(connectionsResJson)

    
    setConnections(connectionsResJson);

  }, [])

  return (
    <div className="Profile">
      <h1 className='Title'><Title author={authorName} /></h1>
      <div><Roles roles={roles} /></div>
      <div className='ContentBar'> 
        <ContentBar bioInfo={bioInfo} roles={roles} sources={sources} connections={connections} works={works} />
      </div>
    </div>

  );
}

export default Home;
