import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./u-r-l1.css";

const URL1 = () => {
  const navigate = useNavigate();

  const onVolverTextClick = useCallback(() => {
    navigate("/tracking-gmg");
  }, [navigate]);

  const onCheckboxClick = useCallback(() => {
    navigate("/tracking-gmg");
  }, [navigate]);

  return (
    <div className="url">
      <div className="navigation-panel">
        <div className="volver-wrapper">
          <div className="volver" onClick={onVolverTextClick}>
            ← Volver
          </div>
        </div>
        <div className="action-panel">
          <img className="action-panel-child" alt="" src="/vector-3.svg" />
          <h2 className="aadir-producto">Añadir Producto</h2>
        </div>
      </div>
      <section className="main-view">
        <div className="main-view-inner">
          <div className="checkbox-parent">
            <div className="checkbox" onClick={onCheckboxClick} />
            <h2 className="listo">Añadir</h2>
          </div>
        </div>
        <div className="image-preview">
          <img
            className="image-11-icon"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="rectangle-group">
            <div className="frame-child1" />
            <div className="input-field-parent">
              <div className="input-field">
                <div className="input-box">
                  <img
                    className="image-3-icon"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="pegue-la-url">Pegue la URL de su producto:</div>
              </div>
              <input className="input-area" type="text" />
            </div>
            <div className="image-info">
              <div className="rectangle-container">
                <div className="frame-child2" />
                <div className="imagen-del-producto">Imagen del producto</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default URL1;
