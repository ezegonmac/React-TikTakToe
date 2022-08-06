import styled from "styled-components"

const StyledPlayer = styled.h1`
    position: relative;
    color: white;
    font-family: 'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;
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
        transition: opacity 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
        opacity: ${props => props.player === props.turn ? "1" : "0"};

        border-bottom: inset rgba(256,256,256, 90%) 5px;
        box-shadow: 0px 2px 3px -3px #00000050;
    }
`

const PlayerX = styled(StyledPlayer)`
    grid-column-start: 1;
    grid-column-end: 2;
`

const PlayerO = styled(StyledPlayer)`
    grid-column-start: 3;
    grid-column-end: 4;
`

const Player = (props) => {
    return props.player === "X" ? 
        <PlayerX {...props} >Player X</PlayerX> :
        <PlayerO {...props} >Player O</PlayerO>
}

export default Player;