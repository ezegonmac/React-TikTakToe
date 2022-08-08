import { Component } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import MatrixHelper from "./helpers/MatrixHelper";
import Player from "./components/Player";
import FinalScreen from "./components/FinalScreen";
import './App.css';
import { ResetButton } from "./components/Button";

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

const initialState = {
  finished: false,
  turn : 'X',
  board: [
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ]
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  checkIfFinished = () => {
    const hasFinished = MatrixHelper.checkMatrix(this.state.board);

    if (hasFinished) { 
      this.setState({
        finished : true
      });
    }
    else{
      this.changeTurn();
    }

  }

  changeTurn = () => {
    const newTurn = this.state.turn==='X' ? 'O' : 'X';

    this.setState({
      turn : newTurn
    });
  }

  updateBoard = (row, col, newValue) => {
    const newBoard = this.state.board.slice();
    newBoard[row-1][col-1] = newValue;

    this.setState({
      board : newBoard
    }, () => {
      this.checkIfFinished();
    });
  }

  render() {
    return(
      <>
        { this.state.finished ?
          <FinalScreen winner={this.state.turn}/> :
          null
        }
        <Content>
          <Player player={"X"} turn={this.state.turn}/>
          <Player player={"O"} turn={this.state.turn}/>
          <BoardContainer>
            <Board
              finished={this.state.finished}
              turn={this.state.turn}
              updateBoard={this.updateBoard}/>
          </BoardContainer>
          <ResetButton onClick={this.reset}/>
        </Content>
      </>
    )
  }

}

export default App;
