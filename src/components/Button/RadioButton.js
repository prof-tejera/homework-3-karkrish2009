import "./Button.css";

const RadioButton = ({text}) => {
  console.log(text);
  return (
    <button class="Default-button">
      {text}
    </button>
  );
};

export default RadioButton;
