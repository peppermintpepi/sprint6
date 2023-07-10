import styled from 'styled-components';

/* Exercici 3 - Sprint 6 */ 
const StyledBorder = styled.div`
    border: 2px solid black;
    border-radius: 50px;
    padding: 0.75rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    background-color: ${(props) => (props.isSelected ? '#FF7F50' : 'transparent')};
  `;

  const StyledButton = styled.button `
    text-aling: center;
    margin: 1rem;
    justify-content: center;
    height: 5rem;
    width: 46%;
    border-radius: 50px;
    padding: 0.2rem;
    font-size: 1.2rem;
    background-color: LightGray;

    @media (max-width: 768px) {
      width: 100%;
  `

  const WelcomeText = styled.p `
    font-family: sans-serif;
    text-align: center;
    color: Tomato;
    padding-left: 20%;
    padding-right: 20%;
  `

  const WelcomeHeader = styled.div `
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-family: serif;
    text-aling: center;
    font-size: 2rem;
    color: White;
    background-color: #FF7F50;
  `
  const StyledStartButton = styled.button `
    display: flex,
    justify-content: center;
    text-aling: center;
    margin-left: 25%;
    height: 3rem;
    width: 50%;
    border-radius: 50px;
    padding: 0.2rem;
    background-color: #FF7F50;
`
  export { StyledBorder, StyledButton, WelcomeHeader, WelcomeText, StyledStartButton };

