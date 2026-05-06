import React from "react";
import "../Styles/KgreatProjectPic.css";
import Glover from "../Components/Assets/Glover/GL1.jpg";
import Glover1 from "../Components/Assets/Glover/GL1.jpg";
import Glover2 from "../Components/Assets/Glover/GL2.jpg";
import Glover3 from "../Components/Assets/Glover/GL3.jpg";
import Glover4 from "../Components/Assets/Glover/GL4.jpg";
import Glover5 from "../Components/Assets/Glover/GL5.jpg";
import Glover6 from "../Components/Assets/Glover/GL6.jpg";
import Glover7 from "../Components/Assets/Glover/GL7.jpg";
import Glover8 from "../Components/Assets/Glover/GL8.jpg";


const ProjPicGlover = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={Glover}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">GLOVER</h1>
            <h1 className="headingImage1">IKOYI, LAGOS</h1>
            <p className="textOfImage">CONTRACTING</p>
          </div>
        </div>

        {/* <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED RESIDENTIAL DEVELOPMENT FOR
            LEVITIKAL GROUP AT OKO-AWO STREET, VICTORIA ISLAND, LAGOS.
          </p>
          <p className="aboutProject">
            <span>BUILDING TYPE:</span>
            MIXED TYPED RESIDENTIAL AND OFFICE BUILDING ON 23 FLOORS.
          </p>
          <p className="aboutProject">
            <span>STATUS: </span>
            ONGOING
          </p>
          <p className="aboutProject">
            We were engaged to provide MEP consultancy & Installation services
            for a mixed typed residential and office building on 23 floors. The
            architectural design was carefully studied and state of the art and
            modern applications in the MEP industry was utilized for the design
            of the building. <br />
            The plumbing services recommended for the building utlizes the top
            range obatainable in the industry, Electrical system put into
            consideration energy saving options for lighting and power
            generation, and the Air conditioning was carefully thought out and
            design to meet industry energy efficiency standards.
          </p>
        </div> */}

        <div className="divProjPicMain">
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Glover8} className="projPicImageOf" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjPicGlover;
