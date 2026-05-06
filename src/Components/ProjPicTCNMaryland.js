import React from "react";
import "../Styles/KgreatProjectPic.css";
import TcnMaryland from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import TcnMaryland1 from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import TcnMaryland2 from "../Components/Assets/TCN-Maryland/TCN2.jpg";
import TcnMaryland3 from "../Components/Assets/TCN-Maryland/TCN3.jpg";
import TcnMaryland4 from "../Components/Assets/TCN-Maryland/TCN4.jpg";
import TcnMaryland5 from "../Components/Assets/TCN-Maryland/TCN5.jpg";
import TcnMaryland6 from "../Components/Assets/TCN-Maryland/TCN6.jpg";
import TcnMaryland7 from "../Components/Assets/TCN-Maryland/TCN7.jpg";

const ProjPicTcnMaryland = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={TcnMaryland}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">THE COVENANT NATION</h1>
            <h1 className="headingImage1">MARYLAND</h1>
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
            <img alt="HeroImg" src={TcnMaryland1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={TcnMaryland7} className="projPicImageOf" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjPicTcnMaryland;
