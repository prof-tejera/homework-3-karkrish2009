import "./Button.css";

const PagerButton = ({text}) => {
  console.log(text);
  return (
    <a href="#top">
      {text}
    </a>
  );
};

export default PagerButton;
