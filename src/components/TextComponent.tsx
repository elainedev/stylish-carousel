import "../styles.scss";
import "./text-component.scss";

const TextComponent = () => {
  return (
    <div className="text-component">
      <span className="pre-h1">Lorem Ipsum Dolor</span>
      <h1 className="heading">
        Lorem ipsum dolor sit amet, est mollis evertitur ut
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!
      </p>
      <button className="learn-more-btn">
        Learn More
        <img className="chevron" src="icons/chevron.png" alt="chevron" />
      </button>
    </div>
  );
};

export default TextComponent;
