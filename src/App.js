import { Component } from "react";
import styled from "styled-components";
import Board from "./components/Board";

const Content = styled.div`
  background-color: rgb(25 48 60);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`

const BoardContainer = styled.div`
    background-color: rgba(100,100,100,0.4);
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;
`

class App extends Component {

  state = {
    turn : 'X'
  }

  changeTurn = () => {
    const newTurn = this.state.turn==='X' ? 'O' : 'X';

    this.setState({
      turn : newTurn
    });
  }

  render() {
    return(
      <Content>
        <BoardContainer>
          <Board turn={this.state.turn}/>
        </BoardContainer>
      </Content>
    )
  }

}

export default App;
