import styled from "styled-components";

const StyledButton = styled.button`
    width: 6rem;
    height: 3rem;
    
    font-size: 1.25rem;
    
    border: none;
    outline: none;
    box-shadow: none;
    
    border-radius: 0.5rem;
    color: #293462;

    &:hover {
        box-shadow: 3px 3px 7px 3px rgba(0,0,0,0.2);
    }

    &:active {
        box-shadow: 3px 3px 7px 3px rgba(0,0,0,0.2) inset;
    }

    `


const Button = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

const StyledResetButton = styled(Button)`
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;
    
    margin: auto;

    z-index: 6;
    `

const ResetButton = (props) => {
    return (
        <StyledResetButton {...props}>
            Reset
        </StyledResetButton>
    )
}

export {Button, ResetButton};