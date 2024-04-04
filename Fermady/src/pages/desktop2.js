import "./desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop-2">
      <section className="vector-parent">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img className="frame-item" alt="" src="/group-1@2x.png" />
      </section>
      <section className="quieres-asegurarte-de-obtener-wrapper">
        <div className="quieres-asegurarte-de-container">
          <p className="quieres-asegurarte-de">
            ¿Quieres asegurarte de obtener el mejor precio antes de realizar una
            compra? ¡No busques más! Nuestra página te permite buscar productos
            específicos y ver instantáneamente los precios disponibles en
            diferentes tiendas.
          </p>
          <p className="blank-line">&nbsp;</p>
          <p className="ya-sea-que">
            Ya sea que estés buscando electrodomésticos, electrónicos, productos
            para el hogar, moda, belleza o cualquier otra cosa, nuestra
            plataforma te proporciona una manera rápida y conveniente de
            comparar precios y encontrar las mejores ofertas disponibles en
            línea.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Desktop2;
