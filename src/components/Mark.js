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

    const marked = props.marked;

    const rotation = ( Math.random() * 50 - 25 ) + "deg";
    // USE MEMO ?¿

    return(
        <StyledMark
            rotation = { rotation }>
            { marked ? "x" : null}
        </StyledMark>
    )
}

export default Mark;