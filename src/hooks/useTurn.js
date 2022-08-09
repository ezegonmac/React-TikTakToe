import { useState } from "react";

const useTurn = () => {
    const [turn, setTurn] = useState("O");

    const changeTurn = () => {
        setTurn(turn === "X" ? "O" : "X");  
    }

    const resetTurn = () => {
        setTurn("O");
    }

    return [turn, changeTurn, resetTurn];
}

export default useTurn;