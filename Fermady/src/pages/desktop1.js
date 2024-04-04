import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-3">
      <div className="rectangle-group">
        <div className="frame-child1" />
        <div className="lady-lee">Lady Lee</div>
      </div>
      <div className="rectangle-container">
        <div className="frame-child2" />
        <div className="la-colonia">La Colonia</div>
      </div>
      <div className="group-div">
        <div className="frame-child3" />
        <div className="jetstereo">Jetstereo</div>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child4" />
        <div className="motomundo">Motomundo</div>
      </div>
      <div className="rectangle-parent2">
        <div className="frame-child5" />
        <div className="el-jordan">El Jordan</div>
      </div>
      <div className="wrapper-nationality">
        <img className="nationality-icon" alt="" src="/nationality.svg" />
      </div>
      <section className="tracking-de-precios1">TRACKING DE PRECIOS</section>
      <section className="desktop-3-inner">
        <div className="frame-parent">
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Desktop1;
