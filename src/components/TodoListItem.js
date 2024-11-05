import './css/TodoListItem.css'
import { MdRemoveCircleOutline } from 'react-icons/md'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import React, { useState } from 'react'

function TodoListItem({ pokemon, onRemove }) {
   const { id, evolutions } = pokemon
   const [isGrayscale, setGray] = useState(false)
   const [evolutionStage, setEvolutionStage] = useState(0)

   const DoubleClick = () => {
      setGray((isGrayscale) => !isGrayscale)
   }

   const handleNextEvolution = () => {
      if (evolutionStage < evolutions.length - 1) {
         setEvolutionStage(evolutionStage + 1)
      }
   }

   const handlePreviousEvolution = () => {
      if (evolutionStage > 0) {
         setEvolutionStage(evolutionStage - 1)
      }
   }

   return (
      <div className="TodoListItem">
         <div>
            <div className="img">
               <img src={evolutions[evolutionStage].img} alt={evolutions[evolutionStage].text} onDoubleClick={DoubleClick} style={{ filter: isGrayscale ? 'grayscale(100%)' : 'none' }} />
            </div>
            <div className="text">{evolutions[evolutionStage].text}</div>
         </div>
         <div className="uddBtns">
            {/* 상승 버튼 */}
            <div onClick={() => !isGrayscale && handleNextEvolution(evolutions)} style={{ opacity: evolutionStage === evolutions.length - 1 ? 0.5 : 1, cursor: evolutionStage === evolutions.length - 1 || isGrayscale ? 'not-allowed' : 'pointer' }}>
               <FaArrowUp />
            </div>

            {/* 삭제 버튼 */}
            <div
               className="remove"
               onClick={() => !isGrayscale && onRemove(id)}
               style={{
                  filter: isGrayscale ? 'grayscale(100%)' : 'none',
                  cursor: isGrayscale ? 'not-allowed' : 'pointer',
               }}
            >
               <MdRemoveCircleOutline />
            </div>

            {/* 하락 버튼 */}
            <div onClick={() => !isGrayscale && handlePreviousEvolution(evolutions)} style={{ opacity: evolutionStage === 0 ? 0.5 : 1, cursor: evolutionStage === 0 || isGrayscale ? 'not-allowed' : 'pointer' }}>
               <FaArrowDown />
            </div>
         </div>
      </div>
   )
}

export default TodoListItem
