import React from "react";

const Button = props => {
  return (
    <button
      style={props.style}
      className={
        props.type == "btn1", "btn2", "btn3", 'clear'
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};



export default Button;
