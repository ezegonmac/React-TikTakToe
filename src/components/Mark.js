import { useMemo } from "react";
import styled from "styled-components";

const StyledMark = styled.p`
        background-color: teal;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 300%;

        transform: rotate(${props => props.rotation});

        pointer-events: none;
        `

const Mark = (props) => {

    const mark = props.mark;
    
    const rotation = useMemo(() => {
        return ( Math.random() * 50 - 25 ) + "deg";
    }, []);

    return(
        <StyledMark
            rotation = { rotation }>
            { mark }
        </StyledMark>
    )
}

export default Mark;