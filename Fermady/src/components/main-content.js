import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./main-content.css";

const MainContent = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/tracking-gmg");
  }, [navigate]);

  return (
    <section className="main-content1">
      <div className="left-panel">
        <div className="item-cards-wrapper">
          <div className="item-cards">
            <div className="item-card">
              <img
                className="item-card-child"
                loading="lazy"
                alt=""
                src="/image-31@2x.png"
                onClick={onGroupImageClick}
              />
            </div>
            <div className="image-panel">
              <img
                className="image-4-icon"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <img
              className="image-7-icon"
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
        <div className="frame-group">
          <div className="image-5-wrapper">
            <img
              className="image-5-icon"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
          <div className="image-6-wrapper">
            <img
              className="image-6-icon"
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
          <img
            className="image-8-icon"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
