import React, { useState } from "react";
import InputContainer from "../../components/InputContainer";
import Select from "../../components/Selector";
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
        <div className="dropdown-container">
          <p>Select Game: </p>
          <select name="game" onChange={e => onChange(e)}>
            <option value="">--ANY GAME--</option>
            <option value="halo-custom-edition">halo-custom-edition</option>
            <option value="halo-2-vista">halo-2-vista</option>
            <option value="halo-ce">halo-combat-evolved</option>
            <option value="master-chief-collection">
              master-chief-collection
            </option>
          </select>
        </div>
        <div className="dropdown-container">
          <p>Select Project Type: </p>
          <select name="projecttype" onChange={e => onChange(e)}>
            <option value="">--ANY PROJECT TYPE--</option>
            <option value="custom-map">custom-map</option>
            <option value="mod">mod</option>
            <option value="utility">utility</option>
            <option value="video">video</option>
          </select>
        </div>
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
