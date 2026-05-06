import React from "react";
import "../Styles/KgreatProjectPic.css";
import Mosley from "../Components/Assets/Mosley/MO1.jpg";
import Mosley1 from "../Components/Assets/Mosley/MO1.jpg";
import Mosley2 from "../Components/Assets/Mosley/MO2.jpg";
import Mosley3 from "../Components/Assets/Mosley/MO3.jpg";
import Mosley4 from "../Components/Assets/Mosley/MO4.jpg";
import Mosley5 from "../Components/Assets/Mosley/MO5.jpg";
import Mosley6 from "../Components/Assets/Mosley/MO6.jpg";
import Mosley7 from "../Components/Assets/Mosley/MO7.jpg";
import Mosley8 from "../Components/Assets/Mosley/MO8.jpg";

const ProjPicMosley = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="ProjectPicture"
                            src={Mosley}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">MOSLEY</h1>
                        <h1 className="headingImage1">IKOYI, LAGOS</h1>
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
                        <img alt="HeroImg" src={Mosley1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley5} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley6} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley7} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Mosley8} className="projPicImageOf" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjPicMosley;
