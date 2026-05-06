import React from "react";
import "../Styles/KgreatProjectPic.css";
import RockMould from "../Components/Assets/RockMould/RM1.jpg";
import RockMould1 from "../Components/Assets/RockMould/RM1.jpg";
import RockMould2 from "../Components/Assets/RockMould/RM2.jpg";
import RockMould3 from "../Components/Assets/RockMould/RM3.jpg";
import RockMould4 from "../Components/Assets/RockMould/RM4.jpg";
import RockMould5 from "../Components/Assets/RockMould/RM5.jpg";

const ProjPicRockMould = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="ProjectPicture"
                            src={RockMould}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">ROCKMOULD</h1>
                        {/* <h1 className="headingImage1"></h1> */}
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
                        <img alt="HeroImg" src={RockMould1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={RockMould2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={RockMould3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={RockMould4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={RockMould5} className="projPicImageOf" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjPicRockMould;
