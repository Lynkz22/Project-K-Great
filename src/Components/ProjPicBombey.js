import React from "react";
import "../Styles/KgreatProjectPic.css";
import Bombey from "../Components/Assets/Bombey/BO1.jpg";
import Bombey1 from "../Components/Assets/Bombey/BO1.jpg";
import Bombey2 from "../Components/Assets/Bombey/BO2.jpg";
import Bombey3 from "../Components/Assets/Bombey/BO3.jpg";
import Bombey4 from "../Components/Assets/Bombey/BO4.jpg";
import Bombey5 from "../Components/Assets/Bombey/BO5.jpg";
import Bombey6 from "../Components/Assets/Bombey/BO6.jpg";
import Bombey7 from "../Components/Assets/Bombey/BO7.jpg";
import Bombey8 from "../Components/Assets/Bombey/BO8.jpg";


const ProjPicBombey = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="HeroImg"
                            src={Bombey}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">BOMBEY</h1>
                        <h1 className="headingImage1">LEKKI, LAGOS</h1>
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
                        <img alt="HeroImg" src={Bombey1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey5} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey6} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey7} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={Bombey8} className="projPicImageOf" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjPicBombey;
