import React from "react";
import heroImageVideo from "../Components/Assets/Video/KgVideo1.mp4";
import "../Styles/main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiArrowRight } from "react-icons/ti";

const Hero = (props) => {
  return (
    <>
      <div className="divHero">
        <video
          className="heroImageVideo"
          autoPlay="true"
          loop="true"
          muted="true"
        >
          <source src={heroImageVideo} />
        </video>

        <div className="landingPageText">
          <motion.div
            initial={{ opacity: 0, y: "+50px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            exit={{ opacity: 1, y: "-50px" }}
          >
            <h1 className="openingPhrase">
              K-GREAT
              <br />
              ENGINEERING
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="openingPhraseItems">
              Mechanical Engineering | Electrical Engineering
            </p>
            <p></p>
          </motion.div>
          <div>
            <Link to="/Projects">
              <motion.button
                className="GITButton"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3, delay: 3.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                exit={{ opacity: 1 }}
              >
                <p className="textGITButton">
                  Get In Touch <TiArrowRight className="linkArrow" />
                </p>
              </motion.button>
            </Link>
          </div>
        </div>



        {/* <div className="divHeroLinks">
          <div className="divHeroLinks-1">
            <Link to="/Projects">
              <motion.button
                className="divHeroLinks-2"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.2, duration: 4 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 4px rgb(255, 255, 255)",
                  backgroundColor: "#180e7f",
                }}
              >
                <p>Our Projects</p>
              </motion.button>
            </Link>
          </div>
          <div className="divHeroLinks-3">
            <Link to="/Contact">
              <motion.button
                className="divHeroLinks-2"
                initial={{ x: "+100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.2, duration: 4 }}
                whileHover={{
                  scale: 1.01,
                  // textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 4px rgb(255, 255, 255)",
                  backgroundColor: "#180e7f",
                }}
              >
                <p>Contact Us</p>
              </motion.button>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
