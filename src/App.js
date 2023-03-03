import Home from './Home';
import Test from './Test';
import { useState } from 'react';
import PreLoader from "./Home/PreLoader";
import Header from "./Home/Header";
import CaseStudyText from './CaseStudyText';
import { Routes, Route } from 'react-router-dom';
import Search from './Search/Index.js';
// import Network from './NetworkUI/index';
import CaseHistoricOverview from "./CaseStudies/CaseHistoricOverview";
import CaseGaelic from './CaseStudies/CaseGaelic';
import CaseDeepMap from './CaseStudies/CaseDeepMap';
import CaseEarlyModernDrama from './CaseStudies/CaseEarlyModernDrama';
import CaseBardic from './CaseStudies/CaseBardic';
import CaseMunster from './CaseStudies/CaseMunster';
import CaseNetworkingWomen from './CaseStudies/CaseNetworkingWomen'; 
import Profile from './Profile/home'


function App() {

  const [openNetwork, setOpenNetwork] = useState(false);
  const [changeIrish, setChangeIrish] = useState(false);
  // const [selectedCS, setSelectedCS] = useState("")

  return (
    <div className="App">
      <PreLoader />
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />
      {/* {!openNetwork && !selectedCS.length !=0 && <Home setOpenNetwork={setOpenNetwork} changeIrish={changeIrish} 
                          setSelectedCS={setSelectedCS} />}
      {openNetwork && <Test />}
      {console.log({selectedCS})}
      {selectedCS && <CaseStudyText selectedCS={selectedCS}/>} */}

      <Routes>
        <Route path='/' element={<Home setOpenNetwork={setOpenNetwork} changeIrish={changeIrish}
        />} />

        <Route path='/historical-overview' element={<CaseHistoricOverview />} />
        <Route path='/networking-women' element={<CaseNetworkingWomen />} />
        <Route path='/spenser-in-munster' element={<CaseMunster />} />
        <Route path='/using-gaelic-sources' element={<CaseGaelic />} />
        <Route path='/early-modern-drama' element={<CaseEarlyModernDrama />} />
        <Route path='/deep-mapping' element={<CaseDeepMap />} />
        <Route path='/what-is-bardic-poetry' element={<CaseBardic />} />

        <Route path='/search' element={<Search />} />
        <Route path='/map' element={<Search />} />
        {/* <Route path='/network' element={<Network />} /> */}

        <Route path="/profile/*" element={<Profile />} />


      </Routes>
    </div>
  );
}

export default App;
