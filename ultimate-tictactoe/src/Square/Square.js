import React from "react";

export default function Square(props) {
  return (
    <div>
      <div className="square" onClick={props.onClick}>
        {props.value}
      </div>
    </div>
  );
}
