import { Component } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import MatrixHelper from "./helpers/MatrixHelper";
import Player from "./components/Player";

const Content = styled.div`
    background-color: #293462;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 2fr 1.5fr;
    grid-template-rows: 1.5fr 2fr 1.5fr;
    z-index: -1;
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
      width: 100%;
      aspect-ratio: 1;
      z-index: 0;
      border-radius: 50%;
      background-color: #27315d;
    }
`

class App extends Component {

  state = {
    finished: false,
    turn : 'X',
    board: [
      [null,null,null],
      [null,null,null],
      [null,null,null],
    ]
  }
  
  finalSequence = () => {
    alert("Winner :" + this.state.turn);
  }

  checkIfFinished = () => {
    const hasFinished = MatrixHelper.checkMatrix(this.state.board);

    if (hasFinished) { 
      this.setState({
        finished : true
      });

      this.finalSequence();
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
      <Content>
        <Player player={"X"} turn={this.state.turn}/>
        <Player player={"O"} turn={this.state.turn}/>
        <BoardContainer>
          <Board
            finished={this.state.finished}
            turn={this.state.turn}
            updateBoard={this.updateBoard}/>
        </BoardContainer>
      </Content>
    )
  }

}

export default App;
