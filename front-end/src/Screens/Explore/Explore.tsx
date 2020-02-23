import React, { useState } from "react";
import InputContainer from "../../components/Inputs/InputContainer";
import Selector from "../../components/Inputs/Selector";
import Games from "../../data/Games.json";
import ProjectTypes from "../../data/ProjectTypes.json";
import { buildQueryString } from "../../utils/BuildQueryString";
import { Redirect, Link } from "react-router-dom";
import "../../scss/screens/explore.scss";

const Explore = () => {
  const [queries, updateQueries] = useState({
    game: "",
    projecttype: "",
    username: ""
  });

  const onChange = (e: any) => {
    updateQueries({ ...queries, [e.target.name]: e.target.value });
    console.log(`UPDATED QUERIES`, queries);
  };
  return (
    <div className="explore-page">
      <div className="explore-container">
        <h2>Select your Explore options below!</h2>
        <Selector
          title="Select Game:"
          select={{ name: "game", cb: onChange }}
          options={[{ value: "", query: "", display: "--ANY GAME--" }].concat(
            Games
          )}
          useQuery={true}
        />
        <Selector
          title="Select Project Type:"
          select={{ name: "projecttype", cb: onChange }}
          options={[
            { value: "", query: "", display: "--ANY PROJECT TYPE--" }
          ].concat(ProjectTypes)}
          useQuery={true}
        />
        <div className="text-input-container">
          <InputContainer
            form={[
              {
                label: "Type in a username",
                placeholder: "ANY USER",
                input: "text",
                name: "username",
                state: queries.username,
                cb: onChange,
                required: false
              }
            ]}
          />{" "}
        </div>
        <br />
        <br />
        <div className="buttons">
          <Link
            to={`/feed${buildQueryString(
              queries.game,
              queries.projecttype,
              !queries.username ? "" : "username=".concat(queries.username)
            )}`}
            className="link-button"
          >
            Explore!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
