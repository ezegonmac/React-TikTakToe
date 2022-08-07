import styled, { keyframes } from "styled-components"

const fadeInX = keyframes`
    from {
        transform: translateX(-30vw);
    }
    
    to {
        transform: translateX(0);
    }
`

const fadeOutX = keyframes`
    from {
        transform: translateX(0);
    }
    
    to {
        transform: translateX(-30vw);
    }
`

const fadeInO = keyframes`
    from {
        transform: translateX(30vw);
    }
    
    to {
        transform: translateX(0);
    }
`

const fadeOutO = keyframes`
    from {
        transform: translateX(0);
    }
    
    to {
        transform: translateX(30vw);
    }
`

const StyledPlayer = styled.h1`
    position: relative;
    color: white;
    margin: auto;

    grid-row-start: 1;
    grid-row-end: 2;
    
    &:after {
        content: "";
        position: absolute;
        height: 1.5rem;
        bottom: -1rem;
        left: -30px;
        right: -30px;

        border-bottom: inset rgba(256,256,256, 90%) 5px;
        box-shadow: 0px 2px 3px -3px #00000050;

        display: ${props => props.player === props.turn ?  'block' : 'none'};
        transition: visibility 0.5s linear;
    }
`

const PlayerX = styled(StyledPlayer)`
    grid-column-start: 1;
    grid-column-end: 2;

    &:after{
        animation: ${props => props.player === props.turn ? fadeInX : fadeOutX } 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    }
`

const PlayerO = styled(StyledPlayer)`
    grid-column-start: 3;
    grid-column-end: 4;

    &:after {
        animation: ${props => props.player === props.turn ? fadeInO : fadeOutO} 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    }
`

const Player = (props) => {
    return props.player === "X" ? 
        <PlayerX {...props} >Player X</PlayerX> :
        <PlayerO {...props} >Player O</PlayerO>
}

export default Player;