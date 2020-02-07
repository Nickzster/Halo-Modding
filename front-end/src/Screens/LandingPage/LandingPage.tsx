import React from "react";
import { Redirect, Link } from "react-router-dom";
import "../../scss/screens/landingpage.scss";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <section className="welcome">
        <p className="large">Welcome to Halo Modding!</p>
        <p className="small">
          Your one stop shop to all your halo modding needs!
        </p>
      </section>
      <div className="info-card-container">
        <div className="info-card">
          <h3>What is Halo Modding?</h3>
          <p>
            Halo Modding is a web application that allows any halo modder, from
            any halo game, to share their projects with the entire halo
            community.
          </p>
        </div>
        <div className="info-card">
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
            <Link to="/create-new-post">
              {" "}
              follow the simple form on the app{" "}
            </Link>{" "}
            with the above information, and people will be able to see your
            project!
          </p>
        </div>
        <div className="info-card">
          <h3>
            Can't I just use apps like HaloMaps, HaloCE3, OpenCarnage, or
            Discord to release my projects?
          </h3>
          <p>
            While these services are good enough, they have their downsides. For
            starters, HaloMaps hasn't had a single upload in over 4 years. On
            top of that, it is not secure, and the forum model has a very clunky
            UX on mobile. HaloCE3 solves the forum problem, but it has not seen
            any uploads since September 2019! Another thing to mention is that
            both HaloMaps and HaloCE3 focus on Halo Custom Edition content only.
            OpenCarnage is a very nice forum, but forums generally have poor
            mobile UX, and there are so many nested forums that it makes it
            difficult to find what the user is looking for. Finally, Discord is
            an excellent service, but it has an issue too: servers! You have to
            be in one server to get updates from one project pertaining to one
            game, and you have to be involved in a different server to get
            updates from another project... 10 different halo servers later, and
            it can be a mess! <br />
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
      <div id="getting-started" className="info-card">
        <h2>Getting Started</h2>
        <div className="link-container">
          <Link to="/feed">Explore</Link>
          <Link to="/create-new-post">Upload Project</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
