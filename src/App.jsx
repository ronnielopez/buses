import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import Ingresar from "./Ingresar";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">

        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Hero />
                <div className="bg-about bg-cover bg-center bg-no-repeat">
                  <About />
                </div>
                <Tech/>
                <Projects />
                <div
                  className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
                >
                  <div
                    className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
                  >
                    <Experience />
                  </div>
                </div>
                <div className="relative z-0">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/ingresar" element={<><Navbar /><Ingresar /></>} />
          <Route path="/dashboard" element={<><Dashboard /></>} />
        </Routes>

        {/* <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}

      </div>
    </BrowserRouter>
  );
};

export default App;
