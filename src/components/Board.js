import styled from "styled-components"
import Cell from "./Cell"

const StyledBoard = styled.div`
    aspect-ratio: 1;
    width: clamp(15rem, 90%, 20rem);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    z-index: 2;
`

const Board = (props) => {

    // props
    const finished = props.finished;
    const turn = props.turn;
    const updateBoard = props.updateBoard;

    return(
        <StyledBoard>
            <Cell finished={finished} row={1} col={1} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={1} col={2} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={1} col={3} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={2} col={1} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={2} col={2} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={2} col={3} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={3} col={1} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={3} col={2} turn={turn} updateBoard={updateBoard}/>
            <Cell finished={finished} row={3} col={3} turn={turn} updateBoard={updateBoard}/>
        </StyledBoard>
    )
}

export default Board;