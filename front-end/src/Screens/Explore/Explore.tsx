import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

const Explore = () => {
  const [queries, updateQueries] = useState({ game: "", projecttype: "" });

  let queryString = "";
  const onChange = (e: any) => {
    updateQueries({ ...queries, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto  text-xl text-center">
      <h1 className="text-4xl text-font-color">Welcome to Halo Modding!</h1>
      <br />
      <br />
      <div className="container mx-auto  text-xl text-center bg-primary-blue rounded pt-5 pb-5 m-5">
        <h2 className="text-font-color text-3xl mb-5">Want to browse?</h2>
        <div style={{ display: "inline" }}>
          <div>
            <label className="text-font-color pr-2">Select Game: </label>
            <select required onChange={e => onChange(e)}>
              <option value="">--SELECT GAME--</option>
              <option value="halo-custom-edition">halo-custom-edition</option>
              <option value="halo-2-vista">halo-2-vista</option>
              <option value="halo-ce">halo-combat-evolved</option>
              <option value="master-chief-collection">
                master-chief-collection
              </option>
            </select>
          </div>
          <div>
            <label className="text-font-color pr-2">
              Select Project Type:{" "}
            </label>
            <div style={{ display: "inline" }}>
              <select required onChange={e => onChange(e)}>
                <option value="">--SELECT PROJECT TYPE--</option>
                <option value="custom-map">custom-map</option>
                <option value="mod">mod</option>
                <option value="utility">utility</option>
                <option value="video">video</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Link
          to={`/feed/${queryString}`}
          className="bg-blue-700 text-white rounded p-2 text-3xl cursor-pointer"
        >
          Explore!
        </Link>
      </div>
      <br />
      <div className="p-5 bg-primary-blue">
        <h3 className="text-font-color text-3xl">Want to upload a project?</h3>
        <br />
        <Link
          to="/create-new-post"
          className="bg-blue-700 text-white rounded p-2 text-3xl cursor-pointer"
        >
          Upload A Project
        </Link>
      </div>
    </div>
  );
};

export default Explore;
