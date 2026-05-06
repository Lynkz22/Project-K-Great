import React from "react";
import "../Styles/KgreatProjectPic.css";
import MeridianLandingPic from "../Components/Assets/Beach-House/BH1.jpg";
import BeachHouse1 from "../Components/Assets/Beach-House/BH1.jpg";
import BeachHouse2 from "../Components/Assets/Beach-House/BH2.jpg";
import BeachHouse3 from "../Components/Assets/Beach-House/BH3.jpg";
import BeachHouse4 from "../Components/Assets/Beach-House/BH4.jpg";
import BeachHouse5 from "../Components/Assets/Beach-House/BH5.jpg";
import BeachHouse6 from "../Components/Assets/Beach-House/BH6.jpg";


const ProjPicBeachHouse = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="HeroImg"
              src={MeridianLandingPic}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">BEACH HOUSE</h1>
            <h1 className="headingImage1">IBESHE, LAGOS</h1>
            <p className="textOfImage">CONTRACTING</p>

          </div>
        </div>

        {/* <div className="divProjPictTextOf">
          <p className="aboutProject">
            <span>PROJECT:</span> : PROPOSED COMMERCIAL DEVELOPMENT
            AT IBESHE, LAGOS.
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
            <img alt="HeroImg" src={BeachHouse1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={BeachHouse2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={BeachHouse3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={BeachHouse4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={BeachHouse5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={BeachHouse6} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjPicBeachHouse;
