import "./RadioButtons.css";
import { useState } from "react";
import Panel from "components/Panel/Panel";
import RadioButton from "components/Button/RadioButton";


const RadioButtons = () => {
  const titles = [
    {
      labels: "Apple"
    },
    {
      labels: "Pear"
    },
    {
      labels: "Orange"
    }
  ]

  return (
    <Panel backgroundColor="blue">
    <div>
      {titles ? titles.map(input => <RadioButton text={input.labels} />) : ""}
    </div>
    </Panel>


  );
};

export default RadioButtons;
