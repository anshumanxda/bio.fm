import React from "react";

function Header(props) {
  console.log(props.bioFmUsername, props.avatarLink);
  return (
    <div>
      <img src={props.avatarLink} alt="avatar" />
      <h3>{props.name}</h3>
      <div className="pro">
        <span>PRO</span>
      </div>
      <p>{`bio.fm/${props.bioFmUsername}`}</p>
    </div>
  );
}

export default Header;
