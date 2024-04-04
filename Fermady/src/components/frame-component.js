import "./frame-component.css";

const FrameComponent = () => {
  return (
    <div className="frame-div">
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
  );
};

export default FrameComponent;
