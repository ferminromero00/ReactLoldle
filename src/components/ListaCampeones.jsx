import React, { useState, useEffect } from 'react';
import './ListaCampeones.css';

export default function ListaCampeones({ campeones, onSelect, filterText, respuestasUsadas = [] }) {
    const [isHiding, setIsHiding] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleSelect = (campeon) => {
        setIsHiding(true);
        setTimeout(() => {
            setIsVisible(false);
            onSelect(campeon);
        }, 300); // Mismo tiempo que la duración de la animación
    };

    const campeonesFiltered = campeones ?
        Object.values(campeones)
            .filter(campeon =>
                campeon.name.toLowerCase().includes(filterText.toLowerCase()) &&
                !respuestasUsadas.includes(campeon.id)
            ) : [];

    if (!isVisible) return null;

    return (
        <div className={`w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 lista-container ${isHiding ? 'hide' : ''}`}>
            <ul className="max-h-48 overflow-y-auto">
                {campeonesFiltered.map((campeon) => (
                    <li
                        key={campeon.id}
                        onClick={() => handleSelect(campeon)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        {campeon.name}
                    </li>
                ))}
                {campeonesFiltered.length === 0 && (
                    <li className="px-4 py-2 text-gray-500 italic">
                        {filterText ? 'No se encontraron campeones' : 'No hay más campeones disponibles'}
                    </li>
                )}
            </ul>
        </div>
    );
}