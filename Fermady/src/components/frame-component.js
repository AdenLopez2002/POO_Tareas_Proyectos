import "./frame-component.css";

const FrameComponent = () => {
  return (
    <section className="pricing-details-wrapper">
      <div className="pricing-details">
        <div className="historial-de-precios">Historial de Precios</div>
        <div className="group-div">
          <div className="frame-child5" />
          <div className="frame-wrapper">
            <div className="line-parent">
              <div className="line-div" />
              <div className="march-details">
                <div className="marzo-17">10 Marzo - 17 Marzo</div>
                <div className="past-price-details-wrapper">
                  <div className="past-price-details">
                    <div className="price-indicator" />
                    <div className="l-2200000">L. 22,000.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-separator-wrapper">
            <div className="second-separator" />
          </div>
          <div className="current-price-details-wrapper">
            <div className="current-price-details">
              <div className="marzo-hoy">18 Marzo - Hoy</div>
              <div className="today-price-details-wrapper">
                <div className="today-price-details">
                  <div className="current-price-indicator" />
                  <div className="l-2000000">L. 20,000.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
