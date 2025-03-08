import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Bienvenida from "./pages/Bienvenida";
import Aplicacion from "./pages/Aplicacion";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/home" element={<Aplicacion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
