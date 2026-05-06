import React from "react";
import "../Styles/KgreatProjectPic.css";
import MarieStopesAsaba from "../Components/Assets/MarieStopesAsaba/NW1.png";
import MarieStopesAsaba1 from "../Components/Assets/MarieStopesAsaba/NW1.png";
import MarieStopesAsaba2 from "../Components/Assets/MarieStopesAsaba/NW2.png";
import MarieStopesAsaba3 from "../Components/Assets/MarieStopesAsaba/NW3.png";
import MarieStopesAsaba4 from "../Components/Assets/MarieStopesAsaba/NW4.png";
import MarieStopesAsaba5 from "../Components/Assets/MarieStopesAsaba/NW5.png";
import MarieStopesAsaba6 from "../Components/Assets/MarieStopesAsaba/NW6.png";
import MarieStopesAsaba7 from "../Components/Assets/MarieStopesAsaba/NW7.png";
import MarieStopesAsaba8 from "../Components/Assets/MarieStopesAsaba/NW8.png";
import MarieStopesAsaba9 from "../Components/Assets/MarieStopesAsaba/NW9.png";


const ProjPicMarieStopesAsaba = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={MarieStopesAsaba}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">MARIE STOPES, ASABA</h1>
            <h1 className="headingImage1">SABA</h1>
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
            <img alt="HeroImg" src={MarieStopesAsaba1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={MarieStopesAsaba9} className="projPicImageOf" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjPicMarieStopesAsaba;
