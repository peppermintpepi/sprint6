import React from 'react';
import { StyledBorder } from '../../StyledProps';

// Exercici 1 - Sprint 6 --> afegim la frase directament al paràgraf
// const Escena = () => {
//     return (
//         <div>
//             <p>
//             El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial
//             </p>
//         </div>
//     )
// }

// Exercici 2 - Sprint 6  --> hi pasem un prop (sentences) per imprimir per pantalla des-de l'arxiu App.js
// const Escena = ({sentences}) => {

//     return (
//         <div>
//             <p>
//                 {sentences}
//             </p>
//         </div>
//     )
// }

//Exercici 3 i 4 - Sprint 6  --> afegim l'estil directament al prop i també seleccionem la frase a pintar
const Escena = ({sentences, isSelected}) => {
    return <StyledBorder isSelected={isSelected}>{sentences}</StyledBorder>;
}
export default Escena;
