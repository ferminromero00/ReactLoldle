import React from 'react';

export default function ListaCampeones({ campeones, onSelect, filterText }) {
    // Filtrar campeones basados en el texto de búsqueda
    const campeonesFiltered = campeones ?
        Object.values(campeones).filter(campeon =>
            campeon.name.toLowerCase().includes(filterText.toLowerCase())
        ) : [];

    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-15 z-10">
            <ul className="max-h-48 overflow-y-auto">
                {campeonesFiltered.map((campeon) => (
                    <li
                        key={campeon.id}
                        onClick={() => onSelect(campeon)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        {campeon.name}
                    </li>
                ))}
                {campeonesFiltered.length === 0 && (
                    <li className="px-4 py-2 text-gray-500 italic">
                        No se encontraron campeones
                    </li>
                )}
            </ul>
        </div>
    );
}