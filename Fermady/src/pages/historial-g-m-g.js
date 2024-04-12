import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./historial-g-m-g.css";

const HistorialGMG = () => {
  const navigate = useNavigate();

  const onVolverTextClick = useCallback(() => {
    navigate("/tracking-gmg");
  }, [navigate]);

  const onActionButtonClick = useCallback(() => {
    navigate("/tracking-gmg");
  }, [navigate]);

  return (
    <div className="historial-gmg">
      <div className="main-content-wrapper">
        <div className="main-content">
          <img
            className="main-content-child"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className="tracking-de-precios">TRACKING DE PRECIOS</div>
        </div>
      </div>
      <main className="group-main">
        <div className="frame-child3" />
        <div className="device-options">
          <div className="samsung-galaxy-s22">Samsung Galaxy S22</div>
          <div className="volver-container">
            <div className="volver1" onClick={onVolverTextClick}>
              ← Volver
            </div>
          </div>
        </div>
        <FrameComponent />
        <section className="alert-details-wrapper">
          <div className="alert-details">
            <div className="alert-configuration">
              <div className="alerta-si-el">Alerta si el precio baja de:</div>
              <div className="target-price-input">
                <div className="input-box1" />
              </div>
            </div>
            <div className="alert-action">
              <button className="action-button-parent">
                <div className="action-button" onClick={onActionButtonClick} />
                <div className="aadir-alerta">+ Añadir Alerta</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HistorialGMG;
