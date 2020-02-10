import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Post, Link } from "../../types/Post";
import { sendData } from "../../utils/SendData";
import InputContainer from "../../components/InputContainer";
import Selector from "../../components/Selector";
import ProjectTypes from "../../data/ProjectTypes.json";
import Games from "../../data/Games.json";
import StateArray from "../../utils/classes/StateArray";
import Links from "../../components/Links";
import "../../scss/screens/createpost.scss";

const NewPost = () => {
  const [form, updateForm] = useState({
    username: "",
    email: "",
    game: "",
    projecttype: "",
    projecttitle: "",
    projectdescription: ""
  });
  const [success, updateSuccess] = useState(false);
  const [pending, updatePending] = useState(false);
  //holds special state
  const [projectmirrors, updateProjectMirrors] = useState(new Array<Link>());
  const [downloadmirrors, updateDownloadMirrors] = useState(new Array<Link>());
  const [images, updateImages] = useState(new Array<Link>());
  //holds errors that are thrown from back end if posting is unsuccessful
  const [err, updateErrors] = useState({ errors: [] as Array<string> });
  useEffect(() => window.scrollTo(0, 0), []);
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log("Form was submitted!");
    let submission: Post = {
      userinfo: { username: form.username, email: form.email },
      projecttitle: form.projecttitle,
      description: form.projectdescription,
      game: form.game,
      projecttype: form.projecttype,
      images: images,
      projectmirrors: projectmirrors,
      downloadmirrors: downloadmirrors
    };
    updatePending(true);
    sendData(submission)
      .then(response => {
        if (response[0] && response[0].code) {
          let newErrors = new Array<string>();
          response.map(item => newErrors.push(item.message));
          updateErrors({ errors: newErrors });
          updatePending(false);
          return;
        } else if (
          response &&
          response.userinfo &&
          response.userinfo.email === ""
        ) {
          updateSuccess(true);
        }
        updateErrors({
          errors: ["Something went wrong! Please check back later."]
        });
        updatePending(false);
      })
      .catch(err => {
        console.log(err);
        updatePending(false);
      });
  };
  const changeField = (e: any) => {
    console.log(`Updating: ${e.target.name} to ${e.target.value}`);
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  //TODO: Figure out how to correctly modify the array state
  // const modifyItemState = (e:any) => {
  //   console.log(`Updating a state array!`);
  //   updateForm({...form[e.target.name], [...form[e.target.name], form[e.target.name]]})
  // }
  if (success) return <Redirect to="/feed" />;
  if (pending)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <h1>Submitting post...</h1>
      </div>
    );
  return (
    <React.Fragment>
      <div className="form-container">
        <h1>Share Your Project</h1>
        {err.errors.map((error: string) => (
          <p className="errors">{error}</p>
        ))}
        <form
          onSubmit={e => {
            console.log("Form is being submitted!");
            submitForm(e);
          }}
        >
          <InputContainer
            form={[
              {
                label: "Username",
                input: "text",
                name: "username",
                state: form.username,
                cb: changeField
              },
              {
                label: "Email",
                input: "text",
                name: "email",
                state: form.email,
                cb: changeField
              }
            ]}
          />
          <Selector
            title="What game does your project belong to?"
            select={{ name: "game", cb: changeField }}
            options={[{ value: "", display: "--SELECT GAME---" }].concat(Games)}
          />
          <Selector
            title="What category does your project belong to?"
            select={{ name: "projecttype", cb: changeField }}
            options={[{ value: "", display: "--SELECT PROJECT TYPE--" }].concat(
              ProjectTypes
            )}
          />
          <InputContainer
            form={[
              {
                label: "Project Name",
                input: "text",
                name: "projecttitle",
                state: form.projecttitle,
                cb: changeField
              },
              {
                label: "Project Description",
                input: "textarea",
                name: "projectdescription",
                state: form.projectdescription,
                cb: changeField
              }
            ]}
          />

          {/* IMAGES */}
          <Links
            title="Add Some Images"
            directions="Add images so that people can see what your project looks like!"
            state={images}
            setstate={(newArr: Array<Link>) => {
              console.log("Updating Images!");
              updateImages(images.concat(newArr));
            }}
            removestate={() => {
              updateImages(images.slice(0, images.length - 1));
            }}
          />
          {/* Project Mirrors */}
          <Links
            title="Project Mirrors"
            directions="Still developing this project? Where should we go to see updates?"
            state={projectmirrors}
            setstate={(newArr: Array<Link>) => {
              console.log("Updating Project Mirrors!");
              updateProjectMirrors(projectmirrors.concat(newArr));
            }}
            removestate={() => {
              updateProjectMirrors(
                projectmirrors.slice(0, projectmirrors.length - 1)
              );
            }}
          />
          {/* Download Mirrors */}
          <Links
            title="Download Mirrors"
            directions="Releasing this project? Where should we go to download it?"
            state={downloadmirrors}
            setstate={(newArr: Array<Link>) => {
              console.log("Updating Download Links!");
              updateDownloadMirrors(downloadmirrors.concat(newArr));
            }}
            removestate={() => {
              updateDownloadMirrors(
                downloadmirrors.slice(0, downloadmirrors.length - 1)
              );
            }}
          />
          <section className="submit">
            <button
              style={{ marginBottom: "3em" }}
              type="submit"
              disabled={pending}
            >
              Create New Post
            </button>
          </section>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewPost;
