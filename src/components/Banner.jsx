import React from "react";
import "./styles/mainStyles.scss";
export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1>The Shortcut</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          aspernatur! Ad recusandae consequatur quia itaque similique. Iure
          iusto ipsam optio tenetur nemo, odio doloribus, est tempora, neque
          adipisci nulla voluptatem.
        </p>
        <a>Our Story</a>
        <img src="https://source.unsplash.com/user/kotecinho/6000x4000"></img>
      </div>
    );
  }
}
