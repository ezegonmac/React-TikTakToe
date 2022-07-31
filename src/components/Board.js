import styled from "styled-components"
import Cell from "./Cell"

const StyledBoard = styled.div`
    background-color: yellow;
    aspect-ratio: 1;
    width: clamp(15rem, 65%, 35rem);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

const Board = (props) => {

    return(
        <StyledBoard>
            <Cell row={1} col={1}/>
            <Cell row={1} col={2}/>
            <Cell row={1} col={3}/>
            <Cell row={2} col={1}/>
            <Cell row={2} col={2}/>
            <Cell row={2} col={3}/>
            <Cell row={3} col={1}/>
            <Cell row={3} col={2}/>
            <Cell row={3} col={3}/>
        </StyledBoard>
    )
}

export default Board;