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
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23384578' fill-opacity='0.29' fill-rule='evenodd'/%3E%3C/svg%3E");
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
