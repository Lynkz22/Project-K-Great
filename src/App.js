import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Services from "./Routes/Services";
import Projects from "./Routes/Projects";
import { useEffect } from "react";
import ProjectPageBeachHouse from "./Routes/ProjectPageBeachHouse";
import ProjectPageBourdillon from "./Routes/ProjectPageBourdillon";
import ProjectPageClinicRemodelling from "./Routes/ProjectPageClinicRemodelling";
import ProjectPageDejDeluxe from "./Routes/ProjectPageDejDeluxe";
import ProjectPageDestinyApartments from "./Routes/ProjectPageDestinyApartments";
import ProjectPageExclusiveNet from "./Routes/ProjectPageExclusiveNet";
import ProjectPageGlover from "./Routes/ProjectPageGlover";
import ProjectPageGmunu from "./Routes/ProjectPageGmunu";
import ProjectPageLugardTerraces from "./Routes/ProjectPageLugardTerraces";
import ProjectPageMarieStopesLekki from "./Routes/ProjectPageMarieStopesLekki";
import ProjectPageMarieStopesBenin from "./Routes/ProjectPageMarieStopesBenin";
import ProjectPageMarieStopesAsaba from "./Routes/ProjectPageMarieStopesAsaba";
import ProjectPageMaryamCourt from "./Routes/ProjectPageMaryamCourt";
import ProjectPageMiami from "./Routes/ProjectPageMiami";
import ProjectPageMixedUse from "./Routes/ProjectPageMixedUse";
import ProjectPageOdemela from "./Routes/ProjectPageOdemela";
import ProjectPageOgudu from "./Routes/ProjectPageOgudu";
import ProjectPagePeriwinkleEstate from "./Routes/ProjectPagePeriwinkleEstate";
import ProjectPageTagboOzor from "./Routes/ProjectPageTagboOzor";
import ProjectPageTcnMaryland from "./Routes/ProjectPageTcnMaryland";
import ProjectPageFemiEstate from "./Routes/ProjectPageFemiEstate";
import ProjectPageAlhajaEstate from "./Routes/ProjectPageAlhajaEstate";
import ProjectPageBombey from "./Routes/ProjectPageBombey";
import ProjectPageDavidHill from "./Routes/ProjectPageDavidHill";
import ProjectPageGbagada from "./Routes/ProjectPageGbagada";
import ProjectPageMosley from "./Routes/ProjectPageMosley";
import ProjectPageRockMould from "./Routes/ProjectPageRockMould";
import ProjectPageSpa from "./Routes/ProjectPageSpa";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "auto" });
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/ProjectPageBeachHouse"
          element={<ProjectPageBeachHouse />}
        />

        <Route
          path="/ProjectPageBourdillon"
          element={<ProjectPageBourdillon />}
        />

        <Route
          path="/ProjectPageClinicRemodelling"
          element={<ProjectPageClinicRemodelling />}
        />

        <Route
          path="/ProjectPageDejDeluxe"
          element={<ProjectPageDejDeluxe />}
        />

        <Route
          path="/ProjectPageDestinyApartments"
          element={<ProjectPageDestinyApartments />}
        />

        <Route
          path="/ProjectPageExclusiveNet"
          element={<ProjectPageExclusiveNet />}
        />

        <Route
          path="/ProjectPageGlover"
          element={<ProjectPageGlover />}
        />

        <Route
          path="/ProjectPageGmunu"
          element={<ProjectPageGmunu />}
        />

        <Route
          path="/ProjectPageLugardTerraces"
          element={<ProjectPageLugardTerraces />}
        />

        <Route
          path="/ProjectPageMarieStopesLekki"
          element={<ProjectPageMarieStopesLekki />}
        />


        <Route
          path="/ProjectPageMarieStopesBenin"
          element={<ProjectPageMarieStopesBenin />}
        />

        <Route
          path="/ProjectPageMarieStopesAsaba"
          element={<ProjectPageMarieStopesAsaba />}
        />

        <Route
          path="/ProjectPageMaryamCourt"
          element={<ProjectPageMaryamCourt />}
        />


        <Route
          path="/ProjectPageMaryamCourt"
          element={<ProjectPageMiami />}
        />

        <Route
          path="/ProjectPageMixedUse"
          element={<ProjectPageMixedUse />}
        />

        <Route
          path="/ProjectPageOdemela"
          element={<ProjectPageOdemela />}
        />

        <Route
          path="/ProjectPageOgudu"
          element={<ProjectPageOgudu />}
        />

        <Route
          path="/ProjectPagePeriwinkleEstate"
          element={<ProjectPagePeriwinkleEstate />}
        />

        <Route
          path="/ProjectPageTagboOzor"
          element={<ProjectPageTagboOzor />}
        />

        <Route
          path="/ProjectPageTcnMaryland"
          element={<ProjectPageTcnMaryland />}
        />

        <Route
          path="/ProjectPageFemiEstate"
          element={<ProjectPageFemiEstate />}
        />

        <Route
          path="/ProjectPageAlhajaEstate"
          element={<ProjectPageAlhajaEstate />}
        />

        <Route
          path="/ProjectPageBombey"
          element={<ProjectPageBombey />}
        />

        <Route
          path="/ProjectPageDavidHill"
          element={<ProjectPageDavidHill />}
        />

        <Route
          path="/ProjectPageGbagada"
          element={<ProjectPageGbagada />}
        />

        <Route
          path="/ProjectPageMosley"
          element={<ProjectPageMosley />}
        />

        <Route
          path="/ProjectPageRockMould"
          element={<ProjectPageRockMould />}
        />

        <Route
          path="/ProjectPageSpa"
          element={<ProjectPageSpa />}
        />
      </Routes>
    </div>
  );
}

export default App;
