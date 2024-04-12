import { useMemo } from "react";
import "./property1-variant.css";

const Property1Variant = ({
  computadoraDell,
  l1859600,
  propPadding,
  propMarginTop,
  propWidth,
  onProperty1DefaultContainerClick,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      padding: propPadding,
      marginTop: propMarginTop,
    };
  }, [propPadding, propMarginTop]);

  const computadoraDellStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="property-1variant4"
      style={property1Variant4Style}
      onClick={onProperty1DefaultContainerClick}
    >
      <div className="property-1variant4-child" />
      <footer className="computadora-dell-wrapper">
        <div className="computadora-dell" style={computadoraDellStyle}>
          {computadoraDell}
        </div>
      </footer>
      <div className="l1859600-wrapper">
        <div className="l1859600">{l1859600}</div>
      </div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <h1 className="h11">-</h1>
      </div>
    </div>
  );
};

export default Property1Variant;
