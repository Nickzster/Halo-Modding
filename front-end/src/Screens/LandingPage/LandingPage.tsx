import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import "../../scss/screens/landingpage.scss";

const LandingPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className='landingpage-container'>
      <section className='welcome'>
        <p className='large'>Welcome to Halo Modding!</p>
        <p className='small'>
          The one stop shop to all your halo modding needs!
        </p>
      </section>
      <div className='info-card-container'>
        <div className='info-card'>
          <h3>What is Halo Modding?</h3>
          <p>
            Halo Modding is a web application that allows any halo modder, from
            any halo game, to share their projects with the entire halo
            community.
          </p>
        </div>
        <div className='info-card'>
          <h3>How do I start sharing my projects?</h3>
          <p>You will need:</p>
          <ul>
            <li>A name for your Project</li>
            <li>A description that describes your project</li>
            <li>A username</li>
            <li>An email</li>
            <li>
              An image uploaded to a picture host (imgur, discord, dropbox,
              etc.)
            </li>
            <li>
              Determine the game that your project belongs to (Halo Custom
              Edition, Halo 2 Vista, Halo Combat Evolved, Master Chief
              Collection)
            </li>
            <li>
              Classify your project as either a custom map, mod, video, or
              utility.
            </li>
            <li>[OPTIONAL] Download Links</li>
            <li>
              [OPTIONAL] Project Mirrors -- where to send people who want to
              keep up to date on development
            </li>
          </ul>
          <p>
            And that's it! All you need to do is{" "}
            <Link to='/create-new-post'>
              {" "}
              follow the simple form on the app{" "}
            </Link>{" "}
            with the above information, and people will be able to see your
            project!
          </p>
        </div>
        <div className='info-card'>
          <h3>
            Can't I just use other exsiting websites and services to release my
            projects?
          </h3>
          <p>
            While these services are good enough, they have their downsides. For
            starters, some of these services haven't seen an upload in several
            months or years: this is due to the centralized model that the web
            master must approve all content before posting it to the website.
            Another caveat is that the UI/UX are highly optimized for desktop
            performance: While this is the ideal situation to upload a map, it
            sacrifices the important metric of the mobile user!
            <br />
            While discord servers are a thing, they are usually scattered about:
            having to join to 10 different discord servers to receive updates
            about 10 different projects can be annoying!
            <br />
            <br />
            <ul>
              <li>
                Halo Modding solves these issues. It allows users to create a
                post in under 5 minutes to release their project to the
                community (provided they have their map uploaded to a file
                hosting service, images uploaded to an image hosting service,
                and other links ready to go).{" "}
              </li>{" "}
              <li>
                There is no approval process, because it is automated using a
                machine learning algorithm to check all of the text fields for
                NSFW content.
              </li>
              <li>
                {" "}
                Modders from ANY halo game (Halo Custom Edition, Halo Combat
                Evolved, Halo 2 Vista, Master Chief Collection), REGARDLESS of
                what they are working on (Utilties, Mods, Custom Maps, Videos)
                can share their projects on this platform.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div id='getting-started' className='info-card'>
        <h2>Getting Started</h2>
        <div className='link-container'>
          <Link to='/explore' className='link-button'>
            Explore
          </Link>
          <Link to='/create-new-post' className='link-button'>
            Upload Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
