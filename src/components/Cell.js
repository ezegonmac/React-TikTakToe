import styled from "styled-components";
import { useBoard, useBoardUpdate } from "../context/GameContext";
import BorderHelper from "../helpers/BorderHelper";
import Mark from "./Mark";


const StyledCell = styled.div`
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: ${props=>props.mark===null ? "" : "#FEB13940" };
        }
        
        cursor: ${props=>props.mark===null ? "default" : "pointer" };

        border-top:    ${props=>props.borderTop ? props.$borderStyle : "none"};
        border-right:  ${props=>props.borderRight ? props.$borderStyle : "none"};
        border-bottom: ${props=>props.borderBottom ? props.$borderStyle : "none"};
        border-left:   ${props=>props.borderLeft ? props.$borderStyle : "none"};
        `

const Cell = (props) => {

    // props
    const row = props.row;
    const col = props.col;

    const finished = props.finished;
    const turn = props.turn;

    const borderStyle = "solid 0.25rem rgb(256,256,256)";

    const board = useBoard();
    const updateBoard = useBoardUpdate();
    const mark = board[row-1][col-1];

    const handleClick = () => {
        if(mark===null && !finished) {
            updateBoard(row, col, turn);
        }
    }

    return(
        <StyledCell
            onClick={ handleClick }
            borderTop ={ BorderHelper.hasTopBorder(row, col) }
            borderRight ={ BorderHelper.hasRightBorder(row, col) }
            borderBottom ={ BorderHelper.hasBottomBorder(row, col) }
            borderLeft ={ BorderHelper.hasLeftBorder(row, col) }
            $borderStyle ={ borderStyle }
            >
            <Mark mark={ mark }/>
        </StyledCell>
    )
}

export default Cell;