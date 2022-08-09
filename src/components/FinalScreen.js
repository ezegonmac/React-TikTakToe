import styled, { keyframes } from "styled-components";
import ConfettiShower from "./Confetti";

const blowIn = keyframes`
    from {
        transform: scale(70%);
    }
    
    to {
        transform: scale(100%);
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
`

const StyledFinalScreen = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(40,40,40,90%);
    z-index: 4;

    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${fadeIn} 1s linear forwards;
`

const Winner = styled.h1`
    color: white;
    text-align: center;
    font-size: 6rem;

    animation: ${blowIn} 0.8s cubic-bezier(0.54, 0.54, 0.44, 0.95) alternate infinite both;
`

const FinalScreen = (props) => {
    return(
        <>
            <ConfettiShower/>
            <StyledFinalScreen>
                <Winner>
                    <p>Winner</p>
                    <p>Player {props.winner}</p>
                </Winner>
            </StyledFinalScreen>
        </>
    )
}

export default FinalScreen;