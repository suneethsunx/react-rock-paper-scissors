import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'


import PapperImage from '../images/paper-image.png'
import RockImage from '../images/rock-image.png'
import ScissorImage from '../images/scissor-image.png'


import { useSound } from 'use-sound'
import LoseEffect from '../audios/lose.wav'
import WinEffect from '../audios/win2.mp3'
import DrawEffect from '../audios/draw.wav'


const Game = ({ choice, score, setScore, setAiScore, aiscore }) => {

    const [aichoice, setAiChoice] = useState('')
    const [playerStats, setPlayerStats] = useState('')
    const [status, setStatus] = useState('')
    const [counter, setCounter] = useState(3)

    const [lose] = useSound(LoseEffect)
    const [win] = useSound(WinEffect)
    const [draw] = useSound(DrawEffect)

    const makeAiChoice = () => {
        const choices = ['rock', 'paper', 'scissor']
        setAiChoice(choices[Math.floor(Math.random() * 3)])
    }

    useEffect(() => {
        setStatus('PLAYING...')
        makeAiChoice()
    }, [])


    const makeResult = () => {
        if (choice === 'rock' && aichoice === 'paper') {
            setPlayerStats('lose')
            setStatus('YOU LOSE !')
            setAiScore(aiscore + 1)
        } else if (choice === 'rock' && aichoice === 'scissor') {
            setPlayerStats('win')
            setStatus('YOU WIN !')
            setScore(score + 1)
        } else if (choice === 'paper' && aichoice === 'rock') {
            setPlayerStats('win')
            setStatus('YOU WIN !')
            setScore(score + 1)
        } else if (choice === 'paper' && aichoice === 'scissor') {
            setPlayerStats('lose')
            setStatus('YOU LOSE !')
            setAiScore(aiscore + 1)
        } else if (choice === 'scissor' && aichoice === 'paper') {
            setPlayerStats('win')
            setStatus('YOU WIN !')
            setScore(score + 1)
        } else if (choice === 'scissor' && aichoice === 'rock') {
            setPlayerStats('lose')
            setStatus('YOU LOSE !')
            setAiScore(aiscore + 1)
        } else {
            setStatus('DRAW !')
            setPlayerStats('draw')
        }
    }

    useEffect(() => {
        const timer =
            counter > 0 ? setInterval(() => {
                setCounter(counter - 1)
            }, 500)
                : makeResult()

        return () => {
            clearInterval(timer)
        }
    }, [counter, aichoice])

    useEffect(() => {
        if (playerStats === 'lose') {
            document.querySelector('#player').style.opacity = '50%'
            lose()
        } else if (playerStats === 'win') {
            document.querySelector('#ai').style.opacity = '50%'
            win()
        } else {
            draw()
        }
    }, [playerStats])

    let navigateButton = <Link to='/' state={{ restart: false }} >
        <div className='text-sm bg-slate-700 font-semibold p-2 rounded mt-3 hover:bg-slate-600 duration-100'>PLAY AGAIN</div>
    </Link>
    if (aiscore >= 10 || score >= 10) {
        navigateButton = <Link to='/' state={{ restart: true }} >
            <div className='text-sm bg-slate-700 font-semibold p-2 rounded mt-3 hover:bg-slate-600 duration-100'>RESTART</div>
        </Link>
    }

    return (
        <div>
            {playerStats === 'win' && <Confetti numberOfPieces={500} recycle={false} />}
            <div className="game-container flex flex-col items-center">
                <div>
                    <div className="game-status font-black text-4xl">
                        {status}
                    </div>

                    {
                        counter === 0 ?
                            navigateButton
                            :
                            ''
                    }
                </div>
                <div className="game-area flex justify-between items-end w-1/3 mt-5">
                    <div className="player-choice" id='player'>
                        <div className="text">
                            <h4 className='text-2xl font-semibold'>YOU</h4>
                        </div>
                        <div className="icon mt-3">
                            {choice === 'paper' && <img src={PapperImage} className='w-[150px]' alt={` ${choice} `} />}
                            {choice === 'rock' && <img src={RockImage} className='w-[150px]' alt={` ${choice} `} />}
                            {choice === 'scissor' && <img src={ScissorImage} className='w-[150px]' alt={` ${choice} `} />}
                        </div>
                    </div>
                    <div className='text-4xl opacity-50 font-light'>
                        VS
                    </div>
                    <div className="ai-choice" id='ai'>
                        <div className="text">
                            {
                                counter === 0 ?
                                    <div>
                                        <h4 className='text-2xl font-semibold'>ME</h4>
                                        <div className="icon mt-3">
                                            {aichoice === 'paper' && <img src={PapperImage} className='w-[150px]' alt={` ${aichoice} `} />}
                                            {aichoice === 'rock' && <img src={RockImage} className='w-[150px]' alt={` ${aichoice} `} />}
                                            {aichoice === 'scissor' && <img src={ScissorImage} className='w-[150px]' alt={` ${aichoice} `} />}
                                        </div>
                                    </div>
                                    :
                                    <div className='bg-black/50 w-36 h-36 rounded-full flex items-center justify-center'>
                                        {counter}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game