import React from "react";

const Input = (props) => {

  console.log(props);
  return (
    <div>
      <label><b>{props.children}</b></label>
      <input/>
  </div>
  );
};

export default Input;
