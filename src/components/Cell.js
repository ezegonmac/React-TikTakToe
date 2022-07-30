import styled from "styled-components";

const Cell = (props) => {

    const borderTop = false;
    const borderRight = false;
    const borderBottom = false;
    const borderLeft = false;

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

        border-top: solid 0.1rem rgb(256,256,256);
        border-right: solid 0.1rem rgb(256,256,256);
        border-bottom: ${borderBottom ? "solid 0.1rem rgb(256,256,256)" : "none"};
        border-left: solid 0.1rem rgb(256,256,256);
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