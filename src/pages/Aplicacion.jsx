import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import Fetch from "../utils/fetch"

export default function Aplicacion() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  };

  useEffect(() => {
    const fetchCampeones = async () => {
      const campeones = await Fetch();
      const campAleatorio = campeones[Math.floor(Math.random() * campeones.length)];
      console.log(campAleatorio);
      console.log(campeones);
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
          <p>Campeon a adivinar:</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="En que campeon piensas..."
          />
          <button
            type="submit"
            className="px-6 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}