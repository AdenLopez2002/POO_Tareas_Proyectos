import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className="frame-container">
      <div className="rectangle-parent3" onClick={onGroupContainerClick}>
        <div className="frame-child7" />
        <img
          className="image-3-icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="frame-child8" />
      </div>
      <div className="image-4-wrapper">
        <img
          className="image-4-icon"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
      <div className="image-7-wrapper">
        <img
          className="image-7-icon"
          loading="lazy"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
