 // Esta funcion sirve para mirar el valor de la carta 
/**
 * Esta función extrae la primera parte del string la parte numerica o letra y nos devuelve su valor en numero dependiendo de su condición.
 * @param {String} carta Ejemp: '10H' string de l acrata seleccionada
 * @returns {Number} Ejem: 11 el valor numerico de la misma
 */

 export const valorCarta = (carta) => {
    if (!carta) throw new Error('Carta es un string vacio')

    let valor = carta.substring(0, carta.length - 1);
    return valor = (!isNaN(valor)) ? valor * 1 :
        (valor === 'A') ? 11 : 10;
}
