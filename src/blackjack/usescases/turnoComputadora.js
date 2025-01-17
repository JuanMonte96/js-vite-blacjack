import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumulador-puntos";
import { determinarGanador } from "./determinar-ganador";
import { crearCarta } from "./crear.carta";

/**
 *
 * @param {Number} puntosMinimos // Ejem: 15 Son los puntos que obtuvo el jugador los cuales son base para ganaro perder 
 * @param {Array<string>} deck // Ejem:['2C','4H','JH'...] Es el deck que queda despues del turno del jugador 
 * @param {Array<Number>} puntosJugadores // Ejem: [10,20] Es un array de los puntos recogidos por los jugadores en un array
 * @param {Array<HTMLElement>} divCartasJugadores  
 * @param {Array<HTMLElement>} puntosHTML 
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores ,divCartasJugadores, puntosHTML) => {

    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if (!puntosJugadores) throw new Error ('Puntos de jugador vacio');
    if (!divCartasJugadores || !puntosHTML) throw new Error ('Valores de HTML No se encuentran');
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML )
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    }
    while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
};