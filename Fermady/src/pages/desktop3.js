import "./desktop3.css";

const Desktop3 = () => {
  return (
    <div className="desktop-1">
      <section className="frame-group">
        <div className="vector-container">
          <img className="vector-icon" alt="" src="/vector-1.svg" />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
        </div>
        <button className="group-button">
          <div className="frame-child6" />
          <div className="empecemos">¡Empecemos!</div>
        </button>
      </section>
      <section className="image-background-wrapper">
        <div className="image-background">
          <img
            className="image-2-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="bienvenido-a-nuestra-plataform-wrapper">
            <div className="bienvenido-a-nuestra">
              Bienvenido a nuestra plataforma de monitoreo de precios, donde
              puedes acceder fácilmente a información actualizada sobre una
              variedad de productos ofrecidos por algunas de las principales
              tiendas en línea en Honduras.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop3;
