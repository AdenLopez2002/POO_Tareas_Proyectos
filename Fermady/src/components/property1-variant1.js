import { useMemo } from "react";
import "./property1-variant1.css";

const Property1Variant1 = ({ l1999500, juegoDeSala, propTop, propLeft }) => {
  const juegoDeSalaStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="property-1variant3">
      <div className="property-1variant3-child" />
      <div className="property-1variant3-item" />
      <h1 className="h1">-</h1>
      <div className="l1999500">{l1999500}</div>
      <div className="juego-de-sala" style={juegoDeSalaStyle}>
        {juegoDeSala}
      </div>
    </div>
  );
};

export default Property1Variant1;
