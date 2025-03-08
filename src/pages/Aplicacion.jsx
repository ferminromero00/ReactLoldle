import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import Fetch from "../utils/fetch"
import "./Aplicacion.css"
import ListaCampeones from '../components/ListaCampeones';

export default function Aplicacion() {
  const [input, setInput] = useState('');
  const [campAleatorio, setCampeonAleatorio] = useState(null);
  const [campeones, setCampeones] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [respuestasUsadas, setRespuestasUsadas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    setMostrarLista(false);
  };

  const handleSelect = (campeon) => {
    setInput(''); // Dejamos el input vacío
    setMostrarLista(false);
    setRespuestasUsadas([...respuestasUsadas, campeon.id]);
    // Aquí puedes añadir la lógica para comprobar si el campeón seleccionado es el correcto
  };

  useEffect(() => {
    const fetchCampeones = async () => {
      try {
        const data = await Fetch();
        setCampeones(data);
        const campeonKeys = Object.keys(data);
        setCampeonAleatorio(data[campeonKeys[Math.floor(Math.random() * campeonKeys.length)]]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCampeones();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-64 h-auto"
          />
        </div>

        <div className='flex justify-center m-8'>
          <p>Campeon a adivinar: {campAleatorio?.id}</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setMostrarLista(true);
              }}
              onClick={() => setMostrarLista(true)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="¿En qué campeón piensas?"
            />
          </div>

          {mostrarLista && (
            <ListaCampeones
              campeones={campeones}
              onSelect={handleSelect}
              filterText={input}
              respuestasUsadas={respuestasUsadas}
            />
          )}
        </form>
      </div>
    </div>
  );
}