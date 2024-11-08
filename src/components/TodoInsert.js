import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { useState, useCallback } from 'react'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => setValue(e.target.value), [])
   //submit 눌렀을때 실행됨
   //input창에서 입력한 값 등록
   const onSubmit = useCallback(
      (e) => {
         //submit 이벤트는 브라우저에서 새로고침을 발생시킴->이를 방지하기 위해 사용
         e.preventDefault()
         onInsert(value)
         //props로 전달받은 onInsert 함수 실행
         setValue('')
         //value 값 초기화
      },
      [value, onInsert]
      //onInsert는 useCallback으로 정의된 함수이며 todos state에 의존함 즉 todos가 변경될때마다 onInsert함수도 새로 만들어지므로 사용
   )
   return (
      <>
         <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="포켓몬 이름을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
               <IoMdAddCircleOutline />
            </button>
         </form>
         <ul className="pname">
            <li className="plist">진화 확인 가능 포켓몬</li>
            <li className="plist">|</li>
            <li className="plist">이상해씨</li>
            <li className="plist">파이리</li>
            <li className="plist">꼬부기</li>
            <li className="plist">팽도리</li>
            <li className="plist">발챙이</li>
            <li className="plist">구구</li>
            <li className="plist">꼬마돌</li>
            <li className="plist">리아코</li>
            <li className="plist">브케인</li>
            <li className="plist">치코리타</li>
            <li className="plist">모다피</li>
            <li className="plist">케이시</li>
         </ul>
      </>
   )
}

export default TodoInsert
