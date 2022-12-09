import React, { useState, useEffect, useRef } from 'react'
import PapperImage from '../images/paper-image.png'
import RockImage from '../images/rock-image.png'
import ScissorImage from '../images/scissor-image.png'
import { useNavigate } from 'react-router-dom'
import { useSound } from 'use-sound'
import ClickEffect from '../audios/click.wav'

const PlayGround = ({ choice, setChoice }) => {

    const navigate = useNavigate()
    const handleChoice = (e) => {
        click()
        setChoice(e)
        navigate('/game')
    }

    const [click] = useSound(ClickEffect)

    return (
        <div>
           
            <div className="playground-container">
                <div className="playground flex flex-col justify-center items-center ">
                    <div className="title">
                        <h2 className='font-black text-4xl'>BEAT ME !</h2>

                    </div>
                    <div className="ground mt-5">
                        <div className="options flex flex-col items-center gap-3">
                            <div onClick={() => handleChoice('rock')} onMouseOver={click} className="option cursor-pointer hover:scale-110 hover:rotate-12 duration-100">
                                <img src={RockImage} width={120} alt="Rock" />
                            </div>
                            <div className="bottom flex gap-10">
                                <div onClick={() => handleChoice('paper')} onMouseOver={click} className="option cursor-pointer hover:scale-110 hover:rotate-12 duration-100">
                                    <img src={PapperImage} width={120} alt="Paper" />
                                </div>
                                <div onClick={() => handleChoice('scissor')} onMouseOver={click} className="option cursor-pointer hover:scale-110 hover:-rotate-12 duration-100">
                                    <img src={ScissorImage} width={120} alt="Scissor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGround