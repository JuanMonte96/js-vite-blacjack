import _ from 'underscore';
// Esto nos ayuda a definir los modulos y ser mas legible
/**
 * Esta funcion crea un nuevo deck barajado
 * @param {Array<string>} tiposDeCarta Ejem: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejem: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} deck barajado
 */

// Esta funcion crea una nueva baraja
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if (!tiposDeCarta || tiposDeCarta.leghth === 0) throw new Error('TiposDeCarta es Obligatorio como un arreglo de string');
    
    if (!tiposEspeciales || tiposEspeciales.leghth === 0) throw new Error('TiposEspeciales es Obligatorio como un arreglo de string');

    let deck=[];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    };
    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    };
    return _.shuffle(deck);
};

