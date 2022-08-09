import React, { useContext, useState } from "react";

const BoardContext = React.createContext();
const BoardUpdateContext = React.createContext();
const BoardClearContext = React.createContext();

const useBoard = () => {
    return useContext(BoardContext);
}

const useBoardUpdate = () => {
    return useContext(BoardUpdateContext);
}

const useBoardClear = () => {
    return useContext(BoardClearContext);
}


const GameProvider = ({ children }) => {
    const initialBoard = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]

    const [board, setBoard] = useState(initialBoard);

    const updateBoard = (row, col, newValue) => {

        const newBoard = board.slice();
        newBoard[row-1][col-1] = newValue;
        
        setBoard(newBoard);
    }

    const clearBoard = () => {
        setBoard(initialBoard);
    }

    return(
        <BoardContext.Provider value={board}>
        <BoardUpdateContext.Provider value={updateBoard}>
        <BoardClearContext.Provider value={clearBoard}>

                    {children}

        </BoardClearContext.Provider>
        </BoardUpdateContext.Provider>
        </BoardContext.Provider>
    )
}

export { useBoard, useBoardUpdate, useBoardClear, GameProvider };
