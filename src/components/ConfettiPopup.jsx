import React, { useState } from 'react'
import { useEffect } from 'react'
import { ReactConfetti } from 'react-confetti'

const ConfettiPopup = () => {

    const [deminision, setDeminision] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const showAnimation = () => {
        setDeminision({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', showAnimation())
        return () => {
            window.removeEventListener('resize', showAnimation())
        }
    }, [deminision])
    return (
        <div>
            <ReactConfetti
                width={deminision.width}
                height={deminision.height}
            />
        </div>
    )
}

export default ConfettiPopup