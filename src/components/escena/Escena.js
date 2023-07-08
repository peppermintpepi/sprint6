import React from 'react';
import ReactDOM from 'react-dom';

// Exercici 1 - Sprint 6
// const Escena = () => {
//     return (
//         <div>
//             <p>
//             El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial
//             </p>
//         </div>
//     )
// }


// Exercici 2 - Sprint 6
const Escena = ({sentences}) => {
    return (
        <div>
            <p>
            {sentences}
            </p>
        </div>
    )
}
export default Escena;