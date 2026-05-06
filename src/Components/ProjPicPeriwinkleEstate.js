import React from "react";
import "../Styles/KgreatProjectPic.css";
import Periwinkle from "../Components/Assets/Periwinkle/Prwk1.jpg";
import Periwinkle1 from "../Components/Assets/Periwinkle/PRW1.jpg";
import Periwinkle2 from "../Components/Assets/Periwinkle/PRW2.jpg";
import Periwinkle3 from "../Components/Assets/Periwinkle/PRW3.jpg";
import Periwinkle4 from "../Components/Assets/Periwinkle/PRW5.jpg";
import Periwinkle5 from "../Components/Assets/Periwinkle/PRW6.jpg";
import Periwinkle6 from "../Components/Assets/Periwinkle/PRW7.jpg";
import Periwinkle7 from "../Components/Assets/Periwinkle/PMUP2.jpg";
import Periwinkle8 from "../Components/Assets/Periwinkle/PMUP3.jpg";
import Periwinkle9 from "../Components/Assets/Periwinkle/PMUP4.jpg";
import Periwinkle10 from "../Components/Assets/Periwinkle/PMUP5.jpg";



const ProjPicPeriwinkle = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={Periwinkle}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">PERIWINKLE ESTATE</h1>
            <h1 className="headingImage1">IKATE, LAGOS</h1>
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
            <img alt="HeroImg" src={Periwinkle1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Periwinkle10} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjPicPeriwinkle;
