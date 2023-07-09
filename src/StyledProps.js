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

    background-color: ${(props) => (props.isSelected ? '#F44336' : 'transparent')};
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

    @media (max-width: 768px) {
      width: 100%;
  
  `

  export { StyledBorder, StyledButton };
