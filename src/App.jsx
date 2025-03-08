import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Bienvenida from "./pages/Bienvenida";
import Aplicacion from "./pages/Aplicacion";
import { useState } from "react";



function App() {
  const [input, setInput] = useState('');
  console.log(input);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/home" element={<Aplicacion input={input} setInput={setInput} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
