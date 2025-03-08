import React from 'react';
import { useNavigate } from 'react-router-dom'; // Si estás usando react-router para la navegación
import "./Bienvenida.css"

export default function Bienvenida() {
    const navigate = useNavigate(); // Usado para la navegación

    // Función para redirigir a la página principal
    const ingresarApp = () => {navigate('/home'); };

    return (
        <div className="w-full h-screen bg-[url('../assets/fondoBienvenida.jpg')] bg-cover bg-center z-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center p-5 rounded-2xl">
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} className="p-8 rounded-2xl text-center w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        ¡Bienvenido a mi App , un clon de la aplicacion Loldle!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 w-full">
                        Para que adrian tenga su jueguito
                    </p>
                    <button
                        className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
                        onClick={ingresarApp}
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}
