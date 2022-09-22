import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const LoginForm = () => {

  const inputs = [
    {
      labels: "*Username"
    },
    {
      labels: "*Password"
    }
  ]

  return (
    <Panel>
      <div class="container">
        {inputs ? inputs.map(input => <Input>{input.labels} </Input>) : ""}
      </div>
      <Button
        text="Submit"
      />
    </Panel>

  );
};

export default LoginForm;



/*


      <Button
        active={activeType === "fast-forward"}
        onClick={() => handleClick("fast-forward")}
        text="Fast Forward"
      />
      <Button
        active={activeType === "play"}
        onClick={() => handleClick("play")}
        text="Play"
      />
      <Button
        active={activeType === "stop"}
        onClick={() => handleClick("stop")}
        text="Stop"
      />
    </Panel>
  );
};


export default MediaButtons;
*/
