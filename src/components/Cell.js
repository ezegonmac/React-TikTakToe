import { useState } from "react";
import styled from "styled-components";
import BorderHelper from "../helpers/BorderHelper";
import Mark from "./Mark";

const useMark = (initial) => {
    const [marked, setMark] = useState(initial);
    
    const toggleMark = () => {
      setMark(!marked);
    }
  
    return [marked, toggleMark];
}

const StyledCell = styled.div`
        background-color: green;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: darkgreen;
        }

        border-top:    ${props=>props.borderTop ? props.borderStyle : "none"};
        border-right:  ${props=>props.borderRight ? props.borderStyle : "none"};
        border-bottom: ${props=>props.borderBottom ? props.borderStyle : "none"};
        border-left:   ${props=>props.borderLeft ? props.borderStyle : "none"};
        `

const Cell = (props) => {

    const row = props.row;
    const col = props.col;

    const [marked, toggleMark] = useMark(false);

    const borderStyle = "solid 0.25rem rgb(256,256,256)";

    return(
        <StyledCell 
            onClick={ toggleMark }
            borderTop ={ BorderHelper.hasTopBorder(row, col) }
            borderRight ={ BorderHelper.hasRightBorder(row, col) }
            borderBottom ={ BorderHelper.hasBottomBorder(row, col) }
            borderLeft ={ BorderHelper.hasLeftBorder(row, col) }
            borderStyle ={ borderStyle }
            >
            <Mark marked={ marked }/>
        </StyledCell>
    )
}

export default Cell;