import React from 'react'
import TitleLogo from '../images/title.png'

const ScoreBoard = ({ score }) => {
   return (
      <div>
         <div className="score-board-container flex justify-center">
            <div className='score-board flex justify-between items-center w-1/3 border border-slate-400 rounded-lg p-3 overflow-hidden'>
               <div className="title-sec">
                  <img src={TitleLogo} width={70} alt='game' />
               </div>
               <div className="score-sec h-[60px]">
                  <div className="score-box bg-slate-50 text-[#1E1B36] h-full w-[65px] flex justify-center items-center flex-col rounded p-4">
                     <h3 className='text-4xl font-bold'>{score}</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ScoreBoard