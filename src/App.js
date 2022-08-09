import { useEffect } from "react";
import styled from "styled-components";
import './App.css';
import Board from "./components/Board";
import { ResetButton } from "./components/Button";
import FinalScreen from "./components/FinalScreen";
import Player from "./components/Player";
import { useBoard, useBoardClear } from "./context/GameContext";
import MatrixHelper from "./helpers/MatrixHelper";
import useFinished from "./hooks/useFinished";
import useTurn from "./hooks/useTurn";

const Content = styled.div`
    background-color: #293462;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 2fr 1.5fr;
    grid-template-rows: 1.5fr 2fr 1.5fr;
    z-index: -1;
    overflow: hidden;
`

const BoardContainer = styled.div`
    position: relative;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      width: clamp(15rem, 150%, 35rem);
      aspect-ratio: 1;
      z-index: 0;
      border-radius: 50%;
      background-color: #27315d;
    }
`

const App = () => {

  const board = useBoard();
  const clearBoard = useBoardClear();
  const [hasFinished, finish, restart] = useFinished();
  const [turn, changeTurn, resetTurn] = useTurn();

  useEffect(() => {
    const checkmate = MatrixHelper.checkMatrix(board);

    if (checkmate) {
      finish();
    }
    else{
      changeTurn();
    }
  }, [board])

  const reset = () => {
    clearBoard();
    restart();
    resetTurn();
  }
  
  return(
    <>
      { hasFinished ?
        <FinalScreen winner={turn}/> :
        null
      }
      <Content>
        <Player player={"X"} turn={turn}/>
        <Player player={"O"} turn={turn}/>
        <BoardContainer>
          <Board
            finished={hasFinished}
            turn={turn}/>
        </BoardContainer>
        <ResetButton onClick={reset}/>
      </Content>
    </>
  )

}

export default App;
