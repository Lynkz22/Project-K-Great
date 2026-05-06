import React from "react";
import Jumoke from "../Components/Assets/TeamMembers/MrsJumoke.jpg";

const TeamMembersWife = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Koya Oluwasegun "
              src={Jumoke}
            />
          </div>
          <div className="teamMembersName">
            <h1>
              Okunola <br />
              Adejumoke
            </h1>
            <p> Accountant</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Adejumoke</b> holds a Bachelor Degree in Psychology from the
            University of Lagos. She also has a Masters Degree in Psychology.
            She has worked professionally in the field and she has overseen a
            vast number of projects. She has worked on various projects, from
            small to large scale, private and commercial, and she has a knack
            for delivering exceptional quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersWife;
