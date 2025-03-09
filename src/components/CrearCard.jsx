import React, { useEffect, useState, useRef } from 'react';
import './CrearCard.css';

export default function CrearCard({ campeon, index, campeonObjetivo }) {
    const [isAnimated, setIsAnimated] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            // Pequeño retraso para asegurar que el DOM se ha actualizado
            const timer = setTimeout(() => {
                setIsAnimated(true);
                
                // Añadir un retraso para mostrar el contenido después de que la card aparezca
                setTimeout(() => {
                    setContentVisible(true);
                }, 300);
            }, 50);
            
            return () => clearTimeout(timer);
        }
    }, []);

    const spriteStyle = {
        width: '48px',
        height: '48px',
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/15.5.1/img/sprite/${campeon.image.sprite})`,
        backgroundPosition: `-${campeon.image.x}px -${campeon.image.y}px`,
        backgroundRepeat: 'no-repeat',
    };

    const titulos = ['Campeón', 'Género', 'Posición', 'Especie', 'Recurso', 'Tipo', 'Región', 'Año'];

    const getTipo = (attackrange) => attackrange <= 200 ? "Cuerpo a cuerpo" : "A distancia";
    campeon.tipo = getTipo(campeon.stats.attackrange);

    const getColor = (valor, valorObjetivo) => {
        if (valor === valorObjetivo) return "bg-green-500";
        if (valor.includes(',') || valorObjetivo.includes(',')) {
            const valoresActual = valor.split(',').map(v => v.trim());
            const valoresObjetivo = valorObjetivo.split(',').map(v => v.trim());
            if (valoresActual.some(v => valoresObjetivo.includes(v)) || valoresObjetivo.some(v => valoresActual.includes(v))) {
                return "bg-yellow-500";
            }
        }
        return "bg-red-500";
    };

    return (
        <div 
            ref={cardRef}
            className={`w-full p-4 mb-5 bg-white border rounded-lg shadow-sm ${isAnimated ? 'animate-card' : ''}`} 
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex space-x-4 w-full">
                    {titulos.map((titulo, idx) => (
                        <div key={idx} className="flex-1">
                            <div className="text-xs text-gray-500 mb-1 text-center">
                                {titulo}
                            </div>
                            <div
                                className={`h-12 rounded-md flex items-center justify-center text-white ${
                                    idx === 0 ? "" :
                                    idx === 1 ? getColor(campeon.genero, campeonObjetivo.genero) :
                                    idx === 2 ? getColor(campeon.posicion, campeonObjetivo.posicion) :
                                    idx === 3 ? getColor(campeon.raza, campeonObjetivo.raza) :
                                    idx === 4 ? getColor(campeon.partype, campeonObjetivo.partype) :
                                    idx === 5 ? getColor(getTipo(campeon.stats.attackrange), getTipo(campeonObjetivo.stats.attackrange)) :
                                    idx === 6 ? getColor(campeon.region, campeonObjetivo.region) :
                                    idx === 7 ? getColor(campeon.año, campeonObjetivo.año) : ""
                                }`}
                                style={{
                                    opacity: contentVisible ? 1 : 0, 
                                    transition: 'opacity 0.3s ease-in-out',
                                    transitionDelay: `${0.1 + (idx * 0.15)}s` // Cada elemento aparece con un retraso incremental
                                }}
                            >
                                {idx === 0 && <div style={spriteStyle}></div>}
                                {idx === 1 && <div className="text-center">{campeon.genero}</div>}
                                {idx === 2 && <div className="text-center">{campeon.posicion}</div>}
                                {idx === 3 && <div className="text-center">{campeon.raza}</div>}
                                {idx === 4 && <div className="text-center">{campeon.partype}</div>}
                                {idx === 5 && <div className="text-center">{campeon.tipo}</div>}
                                {idx === 6 && <div className="text-center">{campeon.region}</div>}
                                {idx === 7 && <div className="text-center">{campeon.año}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}