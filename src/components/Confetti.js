import React from 'react'
import Confetti from 'react-confetti'

const ConfettiShower = () => {

    return (
        <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ zindex: 6 }}
        />
  )
}

export default ConfettiShower;