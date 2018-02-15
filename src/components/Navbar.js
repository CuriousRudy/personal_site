import React from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import '../index.css';

const NavBar = () => {
  return (
    <SideNav
      trigger={
        <button className="btn waves-effect waves-dark white-text  l4 s4" large>
          Social Media
        </button>
      }
      options={{ closeOnClick: true }}
    >
      <SideNavItem
        userView
        user={{
          background: 'img/pano-night.jpg',

          name: 'Abraham Rudy',
          email: 'AbeRudy@gmail.com'
        }}
      />
      <SideNavItem
        style={{
          paddingTop: '5px',
          backgroundColor: 'white',
          color: 'black'
        }}
        subheader
      >
        Social Media Links
      </SideNavItem>

      <SideNavItem
        waves
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/CuriousRudy"
      >
        Github
      </SideNavItem>

      <SideNavItem
        waves
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/abraham-rudy-62075295/"
      >
        LinkedIn
      </SideNavItem>
      <SideNavItem
        waves
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/for_goodness_steaks/"
      >
        For Goodness Steaks
      </SideNavItem>

      {/* <SideNavItem waves href="#!third">
        Third Link With Waves
      </SideNavItem> */}
    </SideNav>
  );
};

export default NavBar;
