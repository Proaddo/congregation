import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";
import About from "./pages/about";
import VocationAnimation from "./pages/VocationAnimation";
import Contact from "./pages/contact";
import BangaloreProvince from './components/BangaloreProvince';


import ComeAndSee from './pages/ComeAndSee';
import StudentCandidacy from './pages/StudentCandidacy';
import PreNovitiate from './pages/PreNovitiate';
import Novitiate from './pages/Novitiate';
import Juniorate from './pages/Juniorate';
import Tertiate from './pages/Tertiate';

import Educational from './pages/Educational';
import Pastoral from './pages/Pastoral';
import Medical from './pages/Medical';
import Social from './pages/Social';

import Hostel from './pages/hostels';
import Youth from './pages/youth';

import FounderMemorial from './pages/Foundermemorial';
import SuperiorGeneralMessage from './pages/Superiorgeneral';
import CareElderly from './pages/Elderlycare';



function App() {
  
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vocation-animation" element={<VocationAnimation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bangalore-province" element={<BangaloreProvince />} />
          <Route path="formation/come-and-see" element={<ComeAndSee />} />
            <Route path="/formation/student-candidates" element={<StudentCandidacy />} />
          <Route path="/formation/pre-novitiate" element={<PreNovitiate />} />
          <Route path="/formation/novitiate" element={<Novitiate />} />
          <Route path="/formation/juniorate" element={<Juniorate />} />
          <Route path="/formation/tertiate" element={<Tertiate />} />
         

          {/* Sacred Mission Routes */}
           <Route path="/sacred-mission/educational" element={<Educational />} />
          <Route path="/sacred-mission/pastoral" element={<Pastoral />} />
          <Route path="/sacred-mission/medical" element={<Medical />} />
          <Route path="/sacred-mission/social" element={<Social />} />
          <Route path="/sacred-mission/care" element={<CareElderly />} />
          <Route path="/sacred-mission/hostels" element={<Hostel />} />
          <Route path="/sacred-mission/youth" element={<Youth />} /> 

          <Route path="/founders-memorial" element={<FounderMemorial />} />
          <Route path="/superior-general-message" element={<SuperiorGeneralMessage />} />

                </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;