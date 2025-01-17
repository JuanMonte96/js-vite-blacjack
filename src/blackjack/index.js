import _ from 'underscore';
import { crearDeck } from './usescases/crear-deck.js'
import { pedirCarta } from './usescases/pedir-carta.js';
import { turnoComputadora } from './usescases/turnoComputadora.js';
import { acumularPuntos } from './usescases/acumulador-puntos.js';
import { crearCarta } from './usescases/crear.carta.js';


// Esto nos ayuda aque no se pueda manipular las funciones, ya que se encuntra dentro de una función y no se encuntran definidas
// codigo sin refactorizar

const miModulo = (() => {

    'use strict'; // Es un uso extricto para el codigo, el cual ayuda a no cometer errores 
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    //referencias del HTML
    const btnPedir = document.querySelector('#pedir'),
        btnDetener = document.querySelector('#detener'),
        btnNuevo = document.querySelector('#nuevo'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    deck = crearDeck(tipos, especiales);

    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        //deck = crearDeck();
        puntosJugadores = []
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        btnDetener.disabled = false;
        btnPedir.disabled = false;

        puntosHTML.forEach(elem => elem.innerHTML = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '')

        console.log(puntosHTML.innertext)
    };

    // Eventos

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(deck);

        acumularPuntos(carta, 0 , puntosJugadores , puntosHTML);

        crearCarta(carta, 0 , divCartasJugadores);

        if (puntosJugadores[0] > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores[0], deck, puntosJugadores, divCartasJugadores , puntosHTML);

        } else if (puntosJugadores[0] === 21) {
            turnoComputadora(puntosJugadores[0], deck, puntosJugadores, divCartasJugadores, puntosHTML);
            btnDetener.disabled = true;
            btnPedir.disabled = true;
        }
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, divCartasJugadores, puntosHTML);
        btnDetener.disabled = true;
    })

    btnNuevo.addEventListener('click', () => {
        inicializarJuego()
    });

})(); // funcion anonima autoinvocadas o modulos
