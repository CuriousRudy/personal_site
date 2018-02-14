import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import '../index.css';

class Homepage extends React.Component {
  state = {
    more: true
  };

  showMore = () => {
    this.setState({
      more: !this.state.more
    });
  };
  render() {
    return (
      <div className="homepage" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col s12 l4">
            {this.state.more ? (
              <div className="card hoverable">
                <div className="card-content">
                  <span className="card-title">Abe Rudy</span>
                  <h5 className="text">
                    full-stack web developer working mostly in react.js.
                    overambitious (amateur) chef working mostly with meats.
                    backyard astronomer.
                  </h5>
                </div>
                <div className="card-action">
                  <button className="btn" onClick={() => this.showMore()}>
                    find out more!
                  </button>
                </div>
              </div>
            ) : (
              <div className="card hoverable">
                <div className="card-content">
                  <h5 className="text">
                    from a very young age, I have been captivated by technology.
                    My curiosity was only ever that of a curious child growing
                    up, tinkering here and there. I marvelled at the progress of
                    technology, installing Linux on an old machine,
                    transplanting floppy drives from tower to tower, recovering
                    coins from my zip disk drive. my interest with computers met
                    its match as I fell in love with cooking, which led me to
                    working part-time as a personal chef, specializing in Meats.
                    I love to incorporate science into my cooking routine
                    wherever I can.
                  </h5>
                </div>
                <div className="card-action">
                  <div style={{ width: '100%' }}>
                    <button
                      style={{ backgroundColor: '#212433' }}
                      className="btn l3"
                      onClick={() => this.showMore()}
                    >
                      back
                    </button>
                    <Navbar />

                    <NavLink to="/projects">
                      <button
                        style={{ backgroundColor: '#212433' }}
                        className="btn l5"
                      >
                        projects
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
          {this.state.more ? null : (
            <div className="col s12 l4 offset-l4">
              <div className="card" id="special-card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src="img/profile.jpg"
                    alt="a nice shot of Abe"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    That's me
                  </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    (Still here?)
                  </span>
                  <p>
                    I didn't put anything back here. Mostly because I thought
                    the idea of someone clicking around here and expecting some
                    really coolly styled component with a deep story about me
                    would be funny. The rest of me thought it would be more
                    relevant an experience to get to know me better if you came
                    here and saw a little bit of me, not just some stuff about
                    me, but something that speaks about who I am. And this is
                    it. This is me. Quiet, playful, honest. This is not some
                    grandiose shiny website built as a testament to my skill.
                    This is me, what I like, and what I've built. This is some
                    HTML mixed with the magic of CSS is just such a way that
                    this box sits approximately 2-5 pixels lower on the page
                    than the one opposite, while the background is just slightly
                    off center. But you might not have noticed that. And that's
                    cool too.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Homepage;
