import Desktop3 from "./desktop3";
import Desktop2 from "/";
import "./pagina-principal.css";

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal">
      <Desktop3 />
      <Desktop2 />
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
    </div>
  );
};

export default PaginaPrincipal;
