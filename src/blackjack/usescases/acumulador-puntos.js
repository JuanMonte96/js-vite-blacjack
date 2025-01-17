import { valorCarta } from "./valor-carta";
/**
 * Esta funcion me permite acumular los puntos de ambos jugadores 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 * @returns puntosJugador{Array<Number>} 
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
};
