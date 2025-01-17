/***
 * Esta función extrae el ultimo objeto de la baraja y lo guarda como un string. 
 * @param {Array<string>} deck Ejem: ['2C','4H','10C',...] el deck barajado.
 * @returns {String} carta Ejem: '10C' el ultimo valor del array anterior 
 */

// Esta funcion me permite tomar una carta

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};