import Home from './Home';
import Test from './Test';
import { useState } from 'react';
import PreLoader from "./Home/PreLoader";
import Header from "./Home/Header";
import CaseStudyText from './CaseStudyText';

function App() {

  const [openNetwork, setOpenNetwork] = useState(false);
  const [changeIrish, setChangeIrish] = useState(false);
  const [selectedCS, setSelectedCS] = useState("")

  return (
    <div className="App">
      <PreLoader />
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />
      {!openNetwork && !selectedCS.length !=0 && <Home setOpenNetwork={setOpenNetwork} changeIrish={changeIrish} 
                          setSelectedCS={setSelectedCS} />}
      {openNetwork && <Test />}
      {console.log({selectedCS})}
      {selectedCS && <CaseStudyText selectedCS={selectedCS}/>}
    </div>
  );
}

export default App;
