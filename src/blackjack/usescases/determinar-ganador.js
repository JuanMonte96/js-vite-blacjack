/**
 * 
 * @param {Array<Number>} puntosJugadores Ejem: [10,11] son los valores que se alcanzaron por los jugadores 
 */
export const determinarGanador = (puntosJugadores) => {

    if (!puntosJugadores) throw new Error('Puntos de jugadores no existentes!!');

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 300)
}