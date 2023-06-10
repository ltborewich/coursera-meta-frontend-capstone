import React from "react";
import "./AboutMe.css";

export default function Aboutme() {
  return (
    <div className="flex aboutme-container">
      <div className="aboutme-info">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>{description}</p>
      </div>
      <div className="aboutme-image">
        <img src={require("../../assets/chefs.jpg")} alt="restaurant food" />
      </div>
    </div>
  );
}
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
