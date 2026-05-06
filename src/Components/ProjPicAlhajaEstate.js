import React from "react";
import "../Styles/KgreatProjectPic.css";
import AlhajaEstate from "../Components/Assets/AlhajaEstate/AE1.jpg";
import AlhajaEstate1 from "../Components/Assets/AlhajaEstate/AE1.jpg";
import AlhajaEstate2 from "../Components/Assets/AlhajaEstate/AE2.jpg";
import AlhajaEstate3 from "../Components/Assets/AlhajaEstate/AE3.jpg";
import AlhajaEstate4 from "../Components/Assets/AlhajaEstate/AE4.jpg";
import AlhajaEstate5 from "../Components/Assets/AlhajaEstate/AE5.jpg";

const ProjPicAlhajaEstate = () => {
    return (
        <>
            <section className="sectionProjectPic">
                <div className="divProjPicLanding">
                    <div className="divProjectsImage">
                        <img
                            alt="HeroImg"
                            src={AlhajaEstate}
                            className="projectsLandingImage"
                        />
                    </div>
                    <div className="divImageText">
                        <h1 className="headingImage">ALHAJA ESTATE</h1>
                        <h1 className="headingImage1">BERGER, LAGOS</h1>
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
                        <img alt="HeroImg" src={AlhajaEstate1} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={AlhajaEstate2} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={AlhajaEstate3} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={AlhajaEstate4} className="projPicImageOf" />
                    </div>
                    <div className="divProjectImagesOf">
                        <img alt="HeroImg" src={AlhajaEstate5} className="projPicImageOf" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProjPicAlhajaEstate;
