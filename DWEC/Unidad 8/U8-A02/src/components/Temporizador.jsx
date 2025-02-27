import { useState, useEffect } from "react";

export default function Temporizador() {
    const [duracion, setDuracion] = useState();
    const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {

    let intervalo;

    if (activo && tiempo != duracion) {
      intervalo = setInterval(() => {
        setTiempo((t) => t + 1);
      }, 1000);
    } else if (tiempo === duracion && activo) {
      setFinalizado(true);
      setActivo(false);
    }
    return () => clearInterval(intervalo);
  }, [activo, tiempo]);

  const iniciarTemporizador = () => {
    if (duracion > 0) {
      setTiempo(0);
      setActivo(true);
      setFinalizado(false);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        {!activo && !finalizado && (
          <>
            <h2 className="text-2xl font-bold mb-4">¿Cuantos segundos vamos a contar?</h2>
            <input
              type="number"
              value={duracion}
              onChange={(e) => setDuracion(parseInt(e.target.value) || 0)}
              className="border p-2 rounded-lg w-20 text-center mb-4"
              min="1"
            />
            <button
              onClick={iniciarTemporizador}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Iniciar
            </button>
          </>
        )}

        {activo && !finalizado && (
          <>
            <p className="text-gray-600">Soy un conteo hasta el {duracion} y han transcurrido {tiempo} segundos.</p>
          </>
        )}

        {finalizado && (
          <>
            <h2 className="text-3xl font-bold text-red-500">SE HA TERMINADO EL TIEMPO</h2>
            <button
              onClick={() => setFinalizado(false)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Reiniciar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
