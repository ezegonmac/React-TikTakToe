import { useState } from "react";

const useFinished = () => {
    const [hasFinished, setFinished] = useState(false);

    const finish = () => {
        setFinished(true);
    }

    const restart = () => {
        setFinished(false);
    }

    return [hasFinished, finish, restart];
}

export default useFinished;