import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Bienvenida from "./pages/Bienvenida";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
