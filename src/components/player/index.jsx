import React from "react";
import Action from "../action";
import Result from "../result";

const Player = props => {
  let glowEffect = {};
  if (props.active) {
    glowEffect = {
      "-webkit-box-shadow": "0 0 20px blue",
      "-moz-box-shadow": "0 0 20px blue",
      "box-shadow": "0 0 20px blue"
    };
  }

  return (
    <div style={glowEffect}>
      <Action wUpdate={props.weaponUpdate} isActive={props.active} />
      <Result weapon={props.weapon} status={props.status} />
    </div>
  );
};

export default Player;
