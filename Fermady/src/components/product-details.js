import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "./Property1Variant";
import Property1Variant1 from "./Property1Variant1";
import "./product-details.css";

const ProductDetails = () => {
  const navigate = useNavigate();

  const onProperty1DefaultContainerClick = useCallback(() => {
    navigate("/historial-gmg");
  }, [navigate]);

  return (
    <div className="product-details">
      <div className="property-1default-parent">
        <Property1Variant
          computadoraDell="Samsung Galaxy S22"
          l1859600="L.22,000.00"
          propPadding="0px var(--padding-18xl)"
          propMarginTop="unset"
          propWidth="362px"
          onProperty1DefaultContainerClick={onProperty1DefaultContainerClick}
        />
        <Property1Variant1
          l1999500="L.22,000.00"
          juegoDeSala="Cama Olympia"
          propTop="32px"
          propLeft="30px"
        />
        <Property1Variant1 l1999500="L.30,000.00" juegoDeSala="Juego de Mesa" />
        <Property1Variant
          computadoraDell="Computadora Dell"
          l1859600="L.15,000.00"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
