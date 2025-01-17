/**
 * 
 * @param {String} carta Ejem: '2C' Es la carta escogida en ese momento del deck 
 * @param {Number} turno Ejem: 0 Es el index del array en los Jugadores para tener su turno
 * @param {Array<HTMLElement>} divCartasJugadores es la lista de cartas que se ponen en el Html
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {

    if (!carta) throw new Error('Carta no viene');
    if (turno === undefined || turno === null) throw new Error('No has especificado el turno')
    if (!divCartasJugadores) throw new Error('No tienes cartas');
    

    const imgCarta = document.createElement('img');
    imgCarta.src = `./cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta)
}
