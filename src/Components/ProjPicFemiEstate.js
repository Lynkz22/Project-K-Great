import React from "react";
import "../Styles/KgreatProjectPic.css";
import FemiEstate from "../Components/Assets/Femi-Estate/FB1.jpg";
import FemiEstate1 from "../Components/Assets/Femi-Estate/FB1.jpg";
import FemiEstate2 from "../Components/Assets/Femi-Estate/FB2.jpg";
import FemiEstate3 from "../Components/Assets/Femi-Estate/FB3.jpg";
import FemiEstate4 from "../Components/Assets/Femi-Estate/FB4.jpg";
import FemiEstate5 from "../Components/Assets/Femi-Estate/FB5.jpg";
import FemiEstate6 from "../Components/Assets/Femi-Estate/FB6.jpg";
import FemiEstate7 from "../Components/Assets/Femi-Estate/FB7.jpg";
import FemiEstate8 from "../Components/Assets/Femi-Estate/FB8.jpg";
import FemiEstate9 from "../Components/Assets/Femi-Estate/FB9.jpg";

const ProjPicFemiEstate = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="ProjectPicture"
                            src={FemiEstate}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">FEMI ESTATE</h1>
                        <h1 className="headingImage1">IKORODU, LAGOS</h1>
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
                        <img alt="HeroImg" src={FemiEstate1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate5} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate6} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate7} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate8} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={FemiEstate9} className="projPicImageOf" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProjPicFemiEstate;
