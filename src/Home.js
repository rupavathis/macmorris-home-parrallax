
import Banner from "./Home/Banner";
import Intro from "./Home/Intro";
import Viz from "./Home/Viz";
import CaseStudies from "./Home/CaseStudies";
import Team from "./Home/Team";
import Tweet from "./Home/Tweet";
import Footer from "./Home/Footer";
import CaseStudiesIrish from "./Home/CaseStudiesIrish";
import { useState } from 'react';

function Home({setOpenNetwork, changeIrish, setSelectedCS}) {
   return (
      <>         
         <Banner />
         <Intro changeIrish={changeIrish}/>
         <Viz changeIrish={changeIrish} setOpenNetwork={setOpenNetwork}/>
         {!changeIrish && <CaseStudies setSelectedCS={setSelectedCS}/>}
         {changeIrish && <CaseStudiesIrish />}
         <Team />
         <Tweet />
         <Footer />
      </>
   );
}

export default Home;
