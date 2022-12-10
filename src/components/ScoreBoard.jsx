import React from 'react'
import TitleLogo from '../images/title.png'

const ScoreBoard = ({ score, aiscore }) => {
   let points = 10 - score
   let hepltext = <p className='text-lg font-medium mt-3 opacity-75'>Get {points} more points to WIN !</p>
   if(score >= 10|| aiscore >= 10 ){
      hepltext = ''
   }
   return (
      <div>
         <div className="score-board-container flex justify-center items-center flex-col">
            <div className='score-board flex justify-between items-center w-1/3 border border-slate-400 rounded-lg p-3 overflow-hidden'>
               <div className="score-sec h-[60px]">
               <h4 className='text-sm'>YOU</h4>
                  <div className="score-box bg-slate-50 text-[#1E1B36] h-full w-[65px] flex justify-center items-center flex-col rounded p-4">
                     <h3 className='text-4xl font-bold'>{score}</h3>
                  </div>
               </div>
               <div className="title-sec">
                  <img src={TitleLogo} width={70} alt='game' />
               </div>
               <div className="score-sec h-[60px]">
               <h4 className='text-sm'>ME</h4>
                  <div className="score-box bg-slate-50 text-[#1E1B36] h-full w-[65px] flex justify-center items-center flex-col rounded p-4">
                     <h3 className='text-4xl font-bold'>{aiscore}</h3>
                  </div>
               </div>
            </div>
            {hepltext}
         </div>
      </div>
   )
}

export default ScoreBoard