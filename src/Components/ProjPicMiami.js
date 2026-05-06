import React from "react";
import "../Styles/KgreatProjectPic.css";
import Miami from "../Components/Assets/Miami-Apartments/MA1.webp";
import Miami1 from "../Components/Assets/Miami-Apartments/MA1.webp";
import Miami2 from "../Components/Assets/Miami-Apartments/MA2.webp";
import Miami3 from "../Components/Assets/Miami-Apartments/MA3.webp";
import Miami4 from "../Components/Assets/Miami-Apartments/MA4.webp";
import Miami5 from "../Components/Assets/Miami-Apartments/MA5.jpg";
import Miami6 from "../Components/Assets/Miami-Apartments/MA6.jpg";
import Miami7 from "../Components/Assets/Miami-Apartments/MA7.jpg";

const ProjPicMiami = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={Miami}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">MIAMI</h1>
            <h1 className="headingImage1">TESLIM ELIAS, VICTORIA ISLAND, LAGOS</h1>
            <p className="textOfImage">CONSULTING</p>
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
            <img alt="HeroImg" src={Miami1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={Miami7} className="projPicImageOf" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjPicMiami;
