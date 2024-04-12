import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import URL1 from "./pages/u-r-l1";
import HistorialGMG from "./pages/historial-g-m-g";
import PaginaPrincipal from "./pages/pagina-principal";
import Desktop from "./pages/desktop";
import Desktop1 from "./pages/desktop1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/historial-gmg":
        title = "";
        metaDescription = "";
        break;
      case "/pagina-principal":
        title = "";
        metaDescription = "";
        break;
      case "/tracking-gmg":
        title = "";
        metaDescription = "";
        break;
      case "/tracking":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<URL1 />} />
      <Route path="/historial-gmg" element={<HistorialGMG />} />
      <Route path="/pagina-principal" element={<PaginaPrincipal />} />
      <Route path="/tracking-gmg" element={<Desktop />} />
      <Route path="/tracking" element={<Desktop1 />} />
    </Routes>
  );
}
export default App;
