import React from "react";
import "../Styles/KgreatProjectPic.css";
import LugardTerraces from "../Components/Assets/Lugard-Terraces/LT1.jpg";
import LugardTerraces1 from "../Components/Assets/Lugard-Terraces/LT1.jpg";
import LugardTerraces2 from "../Components/Assets/Lugard-Terraces/LT2.jpg";
import LugardTerraces3 from "../Components/Assets/Lugard-Terraces/LT3.jpg";
import LugardTerraces4 from "../Components/Assets/Lugard-Terraces/LT4.jpg";
import LugardTerraces5 from "../Components/Assets/Lugard-Terraces/LT5.jpg";
import LugardTerraces6 from "../Components/Assets/Lugard-Terraces/LT6.jpg";
import LugardTerraces7 from "../Components/Assets/Lugard-Terraces/LT7.jpg";
import LugardTerraces8 from "../Components/Assets/Lugard-Terraces/LT8.jpg";
import LugardTerraces9 from "../Components/Assets/Lugard-Terraces/LT9.jpg";


const ProjPicLugardTerraces = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={LugardTerraces}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">LUGARD TERRACES</h1>
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
            <img alt="HeroImg" src={LugardTerraces1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={LugardTerraces9} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjPicLugardTerraces;
