import React from 'react';
import { Parallax } from 'react-materialize';

const Projects = props => {
  return (
    <div>
      <div className="projectHeader">
        <h4 className="center projectHeader" style={{ height: '1.5em' }}>
          projectMode
        </h4>
      </div>
      <div className="hide-on-large-only">
        <div className="col s12">
          <img
            style={{ width: '100vw' }}
            alt="eventSpace, a simple social media platform to schedule events!"
            src="img/eventspace.jpeg"
          />
        </div>
      </div>
      <Parallax
        className="l12 s12 hide-on-med-and-down"
        style={{ 'min-height': '600px' }}
        imageSrc="img/eventspace.jpeg"
      />
      <div className="section row projectHeader" style={{ height: '350px' }}>
        <div className="col l6 s12 ">
          <div>
            <div className="row">
              <div className="col s6">
                <h4 className="header">eventSpace</h4>
              </div>
              <div className="col s4 offset-s2">
                <p>Demo credentials:</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://event-space.herokuapp.com"
                >
                  Take 'er for a test-drive!'
                </a>
              </div>
            </div>

            <p className="white-text">
              A simple, social platform to make planning events and keeping in
              touch easy! Using the Yelp FusionAPI, get real results for bars,
              restaurants, and other destinations to host events, and use the
              integrated chat to keep in touch with all invitees.
            </p>
          </div>
        </div>
        <div className="col s12 l4 offset-l2">
          <h5>this is the video!</h5>
        </div>
      </div>
      <div className="hide-on-large-only">
        <div className="col s12">
          <img
            style={{ width: '100vw' }}
            src="img/orbitmanager.jpeg"
            alt="a clean Looking for Group app for Bungie's Destiny 2"
          />
        </div>
      </div>
      <Parallax
        className="hide-on-med-and-down"
        imageSrc="img/orbitmanager.jpeg"
      />
      <div
        className="section row projectHeader"
        style={{ marginTop: '-10px', height: '350px' }}
      >
        <div className="col l6 s12 offset-l2">
          <div className="">
            <h4 className="right">orbitManager</h4>
            <p className="white-text  right">
              A customizable companion app for scheduling groups to play
              Bungie's Sci-Fi Shooter, Destiny 2. Use the build in forums to
              chat about upcoming games, new loot, and tips for defeating
              powerful enemies. Clans provide a good way to show your colors,
              and keep in touch with friends!
            </p>
            <p>Demo credentials:</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://orbitmanager-71408.firebaseapp.com"
            >
              Take 'er for a test-drive!'
            </a>
          </div>
        </div>
        <div className="col s12 l4">
          <h5>this is the video!</h5>
        </div>
      </div>
      <div className="hide-on-large-only">
        <div className="col s12">
          <img
            style={{ width: '100vw' }}
            src="img/haushunter.jpeg"
            alt="a simple app for keeping track of new listing on your search for a new home!"
          />
        </div>
      </div>
      <Parallax
        className="hide-on-med-and-down"
        imageSrc="img/haushunter.jpeg"
      />
      <div className="section row projectHeader" style={{ height: '350px' }}>
        <div className="col s12 l6 projectHeader">
          <div className="row">
            <div className="col s6 l6">
              <h4>hausHuntr</h4>
            </div>
            <div className="col s4 offset-s2">
              <p>Demo credentials:</p>
              <a target="_blank" href="">
                Link Coming Soon
              </a>
            </div>
          </div>

          <p className="white-text">
            Finding a new home is HARD! Make it easier with HausHuntr! A simple
            app for keeping track of New Homes that you love, with all your
            ducks in a row! View all your listings, with layout and neighborhood
            information, keep track of homes with notes, and schedule
            appointments to go see your next home.
          </p>
        </div>
        <div className="col s12 l4 offset-l2 projectHeader">
          <h5>this is the video!</h5>
        </div>
      </div>
      <Parallax className="hide-on-small-only" imageSrc="img/image.jpg" />
    </div>
  );
};

export default Projects;
