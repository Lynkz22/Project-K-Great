import React from "react";
import "../Styles/KgreatProjectPic.css";
import DestinyApartments from "../Components/Assets/Destiny-Apartments/DA1.jpg";
import DestinyApartments1 from "../Components/Assets/Destiny-Apartments/DA1.jpg";
import DestinyApartments2 from "../Components/Assets/Destiny-Apartments/DA2.jpg";
import DestinyApartments3 from "../Components/Assets/Destiny-Apartments/DA3.jpg";
import DestinyApartments4 from "../Components/Assets/Destiny-Apartments/DA4.jpg";
import DestinyApartments5 from "../Components/Assets/Destiny-Apartments/DA5.jpg";
import DestinyApartments6 from "../Components/Assets/Destiny-Apartments/DA6.jpg";
import DestinyApartments7 from "../Components/Assets/Destiny-Apartments/DA7.jpg";
import DestinyApartments8 from "../Components/Assets/Destiny-Apartments/DA8.jpg";
import DestinyApartments9 from "../Components/Assets/Destiny-Apartments/DA9.jpg";
import DestinyApartments10 from "../Components/Assets/Destiny-Apartments/DA10.jpg";



const ProjPicDestinyApartments = () => {
  return (
    <>
      <section className="sectionProjectPic">
        <div className="divProjPicLanding">
          <div className="divProjectsImage">
            <img
              alt="ProjectPicture"
              src={DestinyApartments}
              className="projectsLandingImage"
            />
          </div>
          <div className="divImageText">
            <h1 className="headingImage">DESTINY APARTMENT</h1>
            <h1 className="headingImage1">ONIRU, LAGOS</h1>
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
            <img alt="HeroImg" src={DestinyApartments1} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments2} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments3} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments4} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments5} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments6} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments7} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments8} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments9} className="projPicImageOf" />
          </div>
          <div className="divProjectImagesOf">
            <img alt="HeroImg" src={DestinyApartments10} className="projPicImageOf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjPicDestinyApartments;
