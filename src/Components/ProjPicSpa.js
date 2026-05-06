import React from "react";
import "../Styles/KgreatProjectPic.css";
import Spa from "../Components/Assets/SPA/SPA1.jpg";
import Spa1 from "../Components/Assets/SPA/SPA1.jpg";
import Spa2 from "../Components/Assets/SPA/SPA2.jpeg";
import Spa3 from "../Components/Assets/SPA/SPA3.jpeg";
import Spa4 from "../Components/Assets/SPA/SPA4.jpeg";
import Spa5 from "../Components/Assets/SPA/SPA5.jpeg";
import Spa6 from "../Components/Assets/SPA/SPA6.jpg";
import Spa7 from "../Components/Assets/SPA/SPA7.jpg";
import Spa8 from "../Components/Assets/SPA/SPA8.jpg";
import Spa9 from "../Components/Assets/SPA/SPA9.jpg";
import Spa10 from "../Components/Assets/SPA/SPA10.jpg";
import Spa11 from "../Components/Assets/SPA/SPA11.jpg";
import Spa12 from "../Components/Assets/SPA/SPA12.jpg";

const ProjPicSpa = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="ProjectPicture"
                            src={Spa}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">SPA</h1>
                        <h1 className="headingImage1">VICTORIA ISLAND, LAGOS</h1>
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
                        <img alt="HeroImg" src={Spa1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa5} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa6} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa7} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa8} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa9} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa10} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa11} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Spa12} className="projPicImageOf" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProjPicSpa;
