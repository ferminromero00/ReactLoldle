export default function VictoriaModal({ campeon }) {
    const handlePlayAgain = () => {
        window.location.reload();
    };

    return (
        <>
            {/* Capa de fondo oscuro */}
            <div className="fixed inset-0 bg-black opacity-80" />
            
            {/* Contenido del modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-gray-900 p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-green-500 mb-4">¡ACERTASTE!</h2>
                    <div className="flex flex-col items-center">
                        <img 
                            src={`http://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${campeon.image.full}`}
                            alt={campeon.name}
                            className="w-32 h-32 mb-4 rounded-lg"
                        />
                        <p className="text-xl text-white">{campeon.name}</p>
                        <p className="text-lg text-gray-400 mb-6">{campeon.title}</p>
                        <button 
                            onClick={handlePlayAgain}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            Jugar de nuevo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}