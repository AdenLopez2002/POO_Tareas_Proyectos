import { useCallback } from "react";
import MainContent from "../components/MainContent";
import "./desktop1.css";

const Desktop1 = () => {
  const onCerrarSesionTextClick = useCallback(() => {
    // Please sync "Inicio de Sesion" to the project
  }, []);

  return (
    <div className="tracking">
      <div className="wrapper-nationality">
        <img className="nationality-icon" alt="" src="/nationality.svg" />
      </div>
      <section className="header-bar">
        <h1 className="tracking-de-precios2">TRACKING DE PRECIOS</h1>
        <b className="cerrar-sesion" onClick={onCerrarSesionTextClick}>
          cerrar sesion
        </b>
      </section>
      <MainContent />
    </div>
  );
};

export default Desktop1;
