import "./Separator.css"

const Seperator = ({ orientation, color }) => {
  return (
    <span className={`${orientation} separator`} style={{ backgroundColor : color }}>
      {" "}
    </span>
  );
};

export default Seperator;
