import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProjectsPage from "../Components/ProjectsPage";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";
import KgreatProjectsPictures from "../Components/KgreatProjectPictures";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <ProjectsPage /> */}
      <KgreatProjectsPictures />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Projects;
