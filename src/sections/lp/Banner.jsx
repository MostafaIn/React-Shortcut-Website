import React from "react";

// Stylesheets
import css from "./Banner.module.scss";
import bannervideo from "../../assets/video.mp4";

export default class Banner extends React.Component {
  render() {
    return (
      <div className={css.banner}>
        <video autoPlay muted loop>
          <source src={bannervideo} type="video/mp4"></source>
        </video>
        <div className={css.inner}>
          <h1>The Shortcut</h1>
          <h3>Accelerating your entrance into the startup world</h3>
          <a href="/#">Our Story</a>
        </div>
      </div>
    );
  }
}