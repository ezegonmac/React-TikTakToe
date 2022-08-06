import { useState } from "react";

const useMark = (initial) => {
    const [mark, setMark] = useState(initial);
    
    const toggleMark = (turn) => {
        const newMark = turn;
        setMark(newMark);
        return newMark;
    }
  
    return [mark, toggleMark];
}

export default useMark;