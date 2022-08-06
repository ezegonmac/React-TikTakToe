import { useMemo } from "react";
import styled from "styled-components";

const StyledMark = styled.p`
        color: ${props => props.mark === "X" ? "#FFF80A" : "#D61C4E"};
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 200%;
        text-shadow: 2px 2px 4px #00000070;

        transform: rotate(${props => props.rotation});

        pointer-events: none;
        user-select: none;
        `

const Mark = (props) => {

    const mark = props.mark;
    
    const rotation = useMemo(() => {
        return ( Math.random() * 50 - 25 ) + "deg";
    }, []);

    return(
        <StyledMark
            rotation = { rotation }
            mark= { mark }>
            { mark }
        </StyledMark>
    )
}

export default Mark;