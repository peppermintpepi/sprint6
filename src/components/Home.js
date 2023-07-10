// Exercici 5 - Sprint 6 --> creació del component HOME per a poder crear la pantalla de Benvinguda
import React from "react";
import { WelcomeHeader, WelcomeText } from '../StyledProps.js';
import StartButton from './StartButton.js';

const Home = ({ onClick }) => {
    return (
    <div>
        <WelcomeHeader>BENVINGUT/DA A AQUEST TUTORIAL</WelcomeHeader>
        <WelcomeText>En aquest tutorial anireu avançant a mesura que entengueu els consells recomenats. Només haureu d'avançar amb el botó "Següent". Si teniu qualsevol dubte, sempre podreu tornar a l'anterior consell prement el botó "Anterior".</WelcomeText>
        <WelcomeText>Bona sort i endevant!</WelcomeText>
        <StartButton onClick={onClick} />
    </div>
    );
}

export default Home;
