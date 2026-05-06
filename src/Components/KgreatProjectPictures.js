import React from "react";
import "../Styles/KgreatProjectPictures.css";
import { Link } from "react-router-dom";
import BeachHouse from "../Components/Assets/Beach-House/BH1.jpg";
import Bourdillon from "../Components/Assets/Bourdillon/BOU1.jpg";
import ClinicRemodelling from "../Components/Assets/ClinicRen/CR1.png";
import DejDeluxe from "../Components/Assets/Dej-Deluxe/DEJ1.jpg";
import DestinyApartments from "../Components/Assets/Destiny-Apartments/DA1.jpg";
import ExclusiveNet from "../Components/Assets/ExclusiveNet/EN1.png";
import Glover from "../Components/Assets/Glover/GL1.jpg";
import Gmunu from "../Components/Assets/Gmunu/GMR1.jpg";
import LugardTerraces from "../Components/Assets/Lugard-Terraces/LT1.jpg";
import MarieStopesLekki from "../Components/Assets/MarieStopes/MS1.png";
import MarieStopesBenin from "../Components/Assets/MarieStopesBenin/MS.png";
import MarieStopesAsaba from "../Components/Assets/MarieStopesAsaba/NW1.png";
import MaryamCourt from "../Components/Assets/Maryam-Court/MC1.jpg";
import Miami from "../Components/Assets/Miami-Apartments/MA1.webp";
import MixedUse from "../Components/Assets/Mixed-Use/MUD1.jpg";
import Odemela from "../Components/Assets/Odemela/OC1.jpg";
import Ogudu from "../Components/Assets/Ogudu/OG1.jpg";
import Periwinkle from "../Components/Assets/Periwinkle/Prwk1.jpg";
import TagboOzor from "../Components/Assets/Tagbo-Ozor/TO1.jpg";
import TcnMaryland from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import FemiEstate from "../Components/Assets/Femi-Estate/FB1.jpg";
import AlhajaEstate from "../Components/Assets/AlhajaEstate/AE1.jpg";
import Bombey from "../Components/Assets/Bombey/BO1.jpg";
import DavidHill from "../Components/Assets/David's-Hill/DH1.jpg";
import Gbagada from "../Components/Assets/Gbagada/GB2.jpg";
import Mosley from "../Components/Assets/Mosley/MO1.jpg";
import RockMould from "../Components/Assets/RockMould/RM1.jpg";
import Spa from "../Components/Assets/SPA/SPA1.jpg";

const KgreatProjectsPictures = () => {
    return (
        <>
            <div>
                <h1 className="headingSectionProjectPictures">OUR PROJECTS</h1>
            </div>
            <section className="sectionProjectPictures">
                <Link to="/ProjectPageBeachHouse">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={BeachHouse}
                            className="projectImages"
                        />
                        <p className="textProjectName">Beach House</p>
                    </div>
                </Link>

                <Link to="/ProjectPageBourdillon">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Bourdillon}
                            className="projectImages"
                        />
                        <p className="textProjectName">Bourdillon</p>
                    </div>
                </Link>

                <Link to="/ProjectPageClinicRemodelling">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={ClinicRemodelling}
                            className="projectImages"
                        />
                        <p className="textProjectName">Clinic Remodelling</p>
                    </div>
                </Link>

                <Link to="/ProjectPageDejDeluxe">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={DejDeluxe}
                            className="projectImages"
                        />
                        <p className="textProjectName">Dej-Deluxe</p>
                    </div>
                </Link>

                <Link to="/ProjectPageDestinyApartments">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={DestinyApartments}
                            className="projectImages"
                        />
                        <p className="textProjectName">Destiny Apartments</p>
                    </div>
                </Link>

                <Link to="/ProjectPageExclusiveNet">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={ExclusiveNet}
                            className="projectImages"
                        />
                        <p className="textProjectName">Exclusive Network</p>
                    </div>
                </Link>

                <Link to="/ProjectPageGlover">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Glover}
                            className="projectImages"
                        />
                        <p className="textProjectName">Glover</p>
                    </div>
                </Link>

                <Link to="/ProjectPageGmunu">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Gmunu}
                            className="projectImages"
                        />
                        <p className="textProjectName">Gmunu</p>
                    </div>
                </Link>

                <Link to="/ProjectPageLugardTerraces">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={LugardTerraces}
                            className="projectImages"
                        />
                        <p className="textProjectName">Lugard Terraces</p>
                    </div>
                </Link>

                <Link to="/ProjectPageMarieStopesLekki">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={MarieStopesLekki}
                            className="projectImages"
                        />
                        <p className="textProjectName">Marie Stopes, Lekki</p>
                    </div>
                </Link>

                <Link to="/ProjectPageMarieStopesBenin">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={MarieStopesBenin}
                            className="projectImages"
                        />
                        <p className="textProjectName">Marie Stopes, Benin</p>
                    </div>
                </Link>


                <Link to="/ProjectPageMarieStopesAsaba">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={MarieStopesAsaba}
                            className="projectImages"
                        />
                        <p className="textProjectName">Marie Stopes, Asaba</p>
                    </div>
                </Link>

                <Link to="/ProjectPageMaryamCourt">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={MaryamCourt}
                            className="projectImages"
                        />
                        <p className="textProjectName">Maryam Court</p>
                    </div>
                </Link>


                <Link to="/ProjectPageMiami">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Miami}
                            className="projectImages"
                        />
                        <p className="textProjectName">Miami Apartments</p>
                    </div>
                </Link>

                <Link to="/ProjectPageMixedUse">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={MixedUse}
                            className="projectImages"
                        />
                        <p className="textProjectName">Mixed Use Development</p>
                    </div>
                </Link>


                <Link to="/ProjectPageOdemela">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Odemela}
                            className="projectImages"
                        />
                        <p className="textProjectName">Odemela</p>
                    </div>
                </Link>

                <Link to="/ProjectPageOgudu">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Ogudu}
                            className="projectImages"
                        />
                        <p className="textProjectName">Ogudu</p>
                    </div>
                </Link>

                <Link to="/ProjectPagePeriwinkleEstate">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Periwinkle}
                            className="projectImages"
                        />
                        <p className="textProjectName">Periwinkle Estate</p>
                    </div>
                </Link>

                <Link to="/ProjectPageTagboOzor">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={TagboOzor}
                            className="projectImages"
                        />
                        <p className="textProjectName">Tagbo Ozor</p>
                    </div>
                </Link>

                <Link to="/ProjectPageTcnMaryland">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={TcnMaryland}
                            className="projectImages"
                        />
                        <p className="textProjectName">TCN Maryland</p>
                    </div>
                </Link>

                <Link to="/ProjectPageFemiEstate">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={FemiEstate}
                            className="projectImages"
                        />
                        <p className="textProjectName">Femi Estate</p>
                    </div>
                </Link>

                <Link to="/ProjectPageAlhajaEstate">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={AlhajaEstate}
                            className="projectImages"
                        />
                        <p className="textProjectName">Alhaja Estate</p>
                    </div>
                </Link>

                <Link to="/ProjectPageBombey">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Bombey}
                            className="projectImages"
                        />
                        <p className="textProjectName">Bombey</p>
                    </div>
                </Link>

                <Link to="/ProjectPageDavidHill">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={DavidHill}
                            className="projectImages"
                        />
                        <p className="textProjectName">David's Hill</p>
                    </div>
                </Link>

                <Link to="/ProjectPageGbagada">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Gbagada}
                            className="projectImages"
                        />
                        <p className="textProjectName">Gbagada</p>
                    </div>
                </Link>

                <Link to="/ProjectPageMosley">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Mosley}
                            className="projectImages"
                        />
                        <p className="textProjectName">Mosley</p>
                    </div>
                </Link>

                <Link to="/ProjectPageRockMould">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={RockMould}
                            className="projectImages"
                        />
                        <p className="textProjectName">RockMould</p>
                    </div>
                </Link>

                <Link to="/ProjectPageSPA">
                    <div className="divProjectImages">
                        <img
                            alt="ProjectPicture"
                            src={Spa}
                            className="projectImages"
                        />
                        <p className="textProjectName">SPA</p>
                    </div>
                </Link>

            </section>

            <div className="divSpacing">
                <h1 className="headingSectionProjectPicturesOne">CONSULTING</h1>
            </div>
            {/* 
            <section className="sectionProjectPictures">


                <Link to="/ProjectsPageGarnet">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={GarnetProject} className="projectImages" />
                        <p className="textProjectName">Garnet</p>
                    </div>
                </Link>

                <Link to="/ProjectsPageMeridianTowers">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={MeridianTowers} className="projectImages" />
                        <p className="textProjectName">Meridian Towers</p>
                    </div>
                </Link>

                <Link to="/ProjectsPageTrinityTowers">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={TrinityTowers} className="projectImages" />
                        <p className="textProjectName">Trinity Towers</p>
                    </div>
                </Link>

                <Link to="/ProjectsPageK21Banana">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={Kb1} className="projectImages" />
                        <p className="textProjectName">K21 Banana</p>
                    </div>
                </Link>

                <Link to="/ProjectsPagePax1">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={Parks1} className="projectImages" />
                        <p className="textProjectName">Pax I</p>
                    </div>
                </Link>

                <Link to="/ProjectsPagePax2">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={Parks2} className="projectImages" />
                        <p className="textProjectName">Pax II</p>
                    </div>
                </Link>

                <Link to="/ProjectsPageAV14">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={Av14Eko} className="projectImages" />
                        <p className="textProjectName">AV 14 Eko Atlantic</p>
                    </div>
                </Link>

                <Link to="/ProjectsPageCradleMall">
                    <div className="divProjectImages">
                        <img alt="HeroImg" src={CradleMall} className="projectImages" />
                        <p className="textProjectName">Cradle Mall</p>
                    </div>
                </Link>


            </section> */}
        </>
    );
};

export default KgreatProjectsPictures;
