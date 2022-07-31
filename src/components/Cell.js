import styled from "styled-components";
import BorderHelper from "../helpers/BorderHelper";

const Cell = (props) => {

    const row = props.row;
    const col = props.col;

    const borderTop = BorderHelper.hasTopBorder(row, col);
    const borderRight = BorderHelper.hasRightBorder(row, col);
    const borderBottom = BorderHelper.hasBottomBorder(row, col);
    const borderLeft = BorderHelper.hasLeftBorder(row, col);

    const borderStyle = "solid 0.25rem rgb(256,256,256)";

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

        border-top:    ${borderTop ? borderStyle : "none"};
        border-right:  ${borderRight ? borderStyle : "none"};
        border-bottom: ${borderBottom ? borderStyle : "none"};
        border-left:   ${borderLeft ? borderStyle : "none"};
    `

    const Mark = styled.p`
        background-color: teal;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 300%;
        
        transform: rotate(10deg);
        
        pointer-events: none;
    `

    return(
        <StyledCell>
            <Mark>
                x
            </Mark>
        </StyledCell>
    )
}

export default Cell;