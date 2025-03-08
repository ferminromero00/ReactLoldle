import React from 'react';

export default function CrearCard({ campeon, index }) {
    
    return (
        <div 
            className="w-full p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm card-enter"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{campeon.name}</span>
            </div>
        </div>
    );
}