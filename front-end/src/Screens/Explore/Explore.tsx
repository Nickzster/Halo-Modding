import React, { useState } from "react";
import InputContainer from "../../components/InputContainer";
import Selector from "../../components/Selector";
import Games from "../../data/Games.json";
import ProjectTypes from "../../data/ProjectTypes.json";
import { Redirect, Link } from "react-router-dom";
import "../../scss/screens/explore.scss";

const Explore = () => {
  const [queries, updateQueries] = useState({
    game: "",
    projecttype: "",
    username: ""
  });

  let queryString = `?${queries.game === "" ? "" : `game=${queries.game}`}${
    queries.projecttype === "" ? "" : `&projecttype=${queries.projecttype}`
  }${queries.username === "" ? "" : `&username=${queries.username}`}`;
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
          options={[{ value: "", display: "--ANY GAME--" }].concat(Games)}
        />
        <Selector
          title="Select Project Type:"
          select={{ name: "projecttype", cb: onChange }}
          options={[{ value: "", display: "--ANY PROJECT TYPE--" }].concat(
            ProjectTypes
          )}
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
                cb: onChange
              }
            ]}
          />{" "}
        </div>
        <br />
        <br />
        <div className="buttons">
          <Link to={`/feed${queryString}`}>Explore!</Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
