import React from 'react';

export default function CrearCard({ campeon, index }) {
    const spriteStyle = {
        width: '48px',
        height: '48px',
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/15.5.1/img/sprite/${campeon.image.sprite})`,
        backgroundPosition: `-${campeon.image.x}px -${campeon.image.y}px`,
        backgroundRepeat: 'no-repeat',
    };

    const titulos = ['Campeón', 'Género', 'Posición', 'Especie', 'Recurso', 'Tipo', 'Región', 'Año'];

    const getTipo = (attackrange) => {return attackrange <= 200 ? "Cuerpo a cuerpo" : "A distancia";}
    campeon.tipo = getTipo(campeon.stats.attackrange);

    return (
        <div
            className="w-full p-4 mb-5 bg-white border rounded-lg shadow-sm card-enter h-25"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex space-x-4 w-full">
                    {titulos.map((titulo, idx) => (
                        <div key={idx} className="flex-1">
                            <div className="text-xs text-gray-500 mb-1 text-center">
                                {titulo}
                            </div>
                            <div className="h-12 rounded-md flex items-center justify-center">
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