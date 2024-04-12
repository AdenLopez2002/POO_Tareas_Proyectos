import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import "./desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onVolverTextClick = useCallback(() => {
    navigate("/tracking");
  }, [navigate]);

  const onButtonShapeClick = useCallback(() => {
    navigate("/url");
  }, [navigate]);

  return (
    <div className="tracking-gmg">
      <div className="page-layout">
        <div className="navigation-area">
          <div className="volver2" onClick={onVolverTextClick}>
            ← Volver
          </div>
        </div>
        <div className="vector-container">
          <img className="vector-icon" alt="" src="/vector-21.svg" />
          <div className="tracking-de-precios1">TRACKING DE PRECIOS</div>
        </div>
      </div>
      <section className="tracking-gmg-inner">
        <form className="group-form">
          <div className="frame-child4" />
          <div className="el-gallo-mas">El Gallo mas Gallo</div>
          <ProductDetails />
          <button className="btn-aadir">
            <div className="button-shape" onClick={onButtonShapeClick} />
            <b className="aadir">+ Añadir</b>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Desktop;
