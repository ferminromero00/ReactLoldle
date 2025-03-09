import React, { useEffect, useState, useRef } from 'react'
import logo from '../assets/logo.webp'
import Fetch from "../utils/fetch"
import "./Aplicacion.css"
import ListaCampeones from '../components/ListaCampeones';
import CrearCard from '../components/CrearCard';

export default function Aplicacion() {
  const [input, setInput] = useState('');
  const [campAleatorio, setCampeonAleatorio] = useState(null);
  const [campeones, setCampeones] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [respuestasUsadas, setRespuestasUsadas] = useState([]);
  const [respuestasCards, setRespuestasCards] = useState([]); // Añade este estado
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    setMostrarLista(false);
  };

  const handleSelect = (campeon) => {
    setInput(''); // Dejamos el input vacío
    setMostrarLista(false);
    setRespuestasUsadas([...respuestasUsadas, campeon.id]);
    // Añadimos el nuevo campeón al principio del array
    setRespuestasCards([campeon, ...respuestasCards]);
  };

  useEffect(() => {
    const fetchCampeones = async () => {
      const data = await Fetch();
      setCampeones(data);
      const campeonKeys = Object.keys(data);
      setCampeonAleatorio(data[campeonKeys[Math.floor(Math.random() * campeonKeys.length)]]);
    };

    fetchCampeones();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && 
          !inputRef.current.contains(event.target) && 
          listRef.current && 
          !listRef.current.contains(event.target)) {
        setMostrarLista(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-[url('../assets/fondoBienvenida.jpg')] bg-cover bg-center bg-fixed">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-64 h-auto"
          />
        </div>

        <div className='flex justify-center m-8 bg-black'>
          <p className=''>Campeon a adivinar: {campAleatorio?.id}</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative z-50">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setMostrarLista(true);
              }}
              onClick={() => setMostrarLista(true)}
              className="flex-1 px-4 py-2 border border-gray-300 bg-black rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="¿En qué campeón piensas?"
            />
          </div>

          {mostrarLista && (
            <div ref={listRef}>
              <ListaCampeones
                campeones={campeones}
                onSelect={handleSelect}
                filterText={input}
                respuestasUsadas={respuestasUsadas}
              />
            </div>
          )}
        </form>
      </div>
      {/* Lista de Cards con z-index menor */}
      <div className="mt-10 space-y-2 w-200 relative z-0">
        {[...respuestasCards].map((campeon, index) => (
          <CrearCard 
            key={index} 
            campeon={campeon} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}