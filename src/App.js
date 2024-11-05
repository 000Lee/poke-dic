import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [pokemons, setPoke] = useState([
      {
         id: 1,
         evolutions: [
            { text: '이상해씨', img: '/pokemon/이상해씨.png' },
            { text: '이상해풀', img: '/pokemon/이상해풀.png' },
            { text: '이상해꽃', img: '/pokemon/이상해꽃.png' },
         ],
      },
      {
         id: 2,
         evolutions: [
            { text: '파이리', img: '/pokemon/파이리.png' },
            { text: '리자드', img: '/pokemon/리자드.png' },
            { text: '리자몽', img: '/pokemon/리자몽.png' },
         ],
      },
      {
         id: 3,
         evolutions: [
            { text: '꼬부기', img: '/pokemon/꼬부기.png' },
            { text: '어니부기', img: '/pokemon/어니부기.png' },
            { text: '거북왕', img: '/pokemon/거북왕.png' },
         ],
      } /* 
      {
         id: 4,
         evolutions: [
            { text: '팽도리', img: '/pokemon/팽도리.png' },
            { text: '팽태자', img: '/pokemon/팽태자.png' },
            { text: '엠페르트', img: '/pokemon/엠페르트.png' },
         ],
      },

      {
         id: 5,
         evolutions: [
            { text: '발챙이', img: '/pokemon/발챙이.png' },
            { text: '강챙이', img: '/pokemon/강챙이.png' },
            { text: '슈륙챙이', img: '/pokemon/슈륙챙이.png' },
         ],
      },
      {
         id: 6,
         evolutions: [
            { text: '구구', img: '/pokemon/구구.png' },
            { text: '피죤', img: '/pokemon/피죤.png' },
            { text: '피죤투', img: '/pokemon/피죤투.png' },
         ],
      },
      {
         id: 7,
         evolutions: [
            { text: '꼬마돌', img: '/pokemon/꼬마돌.png' },
            { text: '데구리', img: '/pokemon/데구리.png' },
            { text: '딱구리', img: '/pokemon/딱구리.png' },
         ],
      },
      {
         id: 8,
         evolutions: [
            { text: '리아코', img: '/pokemon/리아코.png' },
            { text: '엘리게이', img: '/pokemon/엘리게이.png' },
            { text: '장크로다일', img: '/pokemon/장크로다일.png' },
         ],
      },
      {
         id: 9,
         evolutions: [
            { text: '브케인', img: '/pokemon/브케인.png' },
            { text: '마그케인', img: '/pokemon/마그케인.png' },
            { text: '블레이범', img: '/pokemon/블레이범.png' },
         ],
      },
      {
         id: 10,
         evolutions: [
            { text: '치코리타', img: '/pokemon/치코리타.png' },
            { text: '베이리프', img: '/pokemon/베이리프.png' },
            { text: '메가니움', img: '/pokemon/메가니움.png' },
         ],
      },
      {
         id: 11,
         evolutions: [
            { text: '모다피', img: '/pokemon/모다피.png' },
            { text: '우츠동', img: '/pokemon/우츠동.png' },
            { text: '우츠보트', img: '/pokemon/우츠보트.png' },
         ],
      },
      {
         id: 12,
         evolutions: [
            { text: '케이시', img: '/pokemon/케이시.png' },
            { text: '후딘', img: '/pokemon/후딘.png' },
            { text: '윤겔라', img: '/pokemon/윤겔라.png' },
         ],
      }, */,
   ])

   const nextId = useRef(13)

   const onInsert = useCallback(
      (text) => {
         // 포켓몬 이름에 따라 미리 정의된 진화 체계를 설정
         const predefinedEvolutions = {
            이상해씨: [
               { text: '이상해씨', img: '/pokemon/이상해씨.png' },
               { text: '이상해풀', img: '/pokemon/이상해풀.png' },
               { text: '이상해꽃', img: '/pokemon/이상해꽃.png' },
            ],
            파이리: [
               { text: '파이리', img: '/pokemon/파이리.png' },
               { text: '리자드', img: '/pokemon/리자드.png' },
               { text: '리자몽', img: '/pokemon/리자몽.png' },
            ],
            꼬부기: [
               { text: '꼬부기', img: '/pokemon/꼬부기.png' },
               { text: '어니부기', img: '/pokemon/어니부기.png' },
               { text: '거북왕', img: '/pokemon/거북왕.png' },
            ],
            팽도리: [
               { text: '팽도리', img: '/pokemon/팽도리.png' },
               { text: '팽태자', img: '/pokemon/팽태자.png' },
               { text: '엠페르트', img: '/pokemon/엠페르트.png' },
            ],
            발챙이: [
               { text: '발챙이', img: '/pokemon/발챙이.png' },
               { text: '강챙이', img: '/pokemon/강챙이.png' },
               { text: '슈륙챙이', img: '/pokemon/슈륙챙이.png' },
            ],
            구구: [
               { text: '구구', img: '/pokemon/구구.png' },
               { text: '피죤', img: '/pokemon/피죤.png' },
               { text: '피죤투', img: '/pokemon/피죤투.png' },
            ],
            꼬마돌: [
               { text: '꼬마돌', img: '/pokemon/꼬마돌.png' },
               { text: '데구리', img: '/pokemon/데구리.png' },
               { text: '딱구리', img: '/pokemon/딱구리.png' },
            ],
            리아코: [
               { text: '리아코', img: '/pokemon/리아코.png' },
               { text: '엘리게이', img: '/pokemon/엘리게이.png' },
               { text: '장크로다일', img: '/pokemon/장크로다일.png' },
            ],
            브케인: [
               { text: '브케인', img: '/pokemon/브케인.png' },
               { text: '마그케인', img: '/pokemon/마그케인.png' },
               { text: '블레이범', img: '/pokemon/블레이범.png' },
            ],
            치코리타: [
               { text: '치코리타', img: '/pokemon/치코리타.png' },
               { text: '베이리프', img: '/pokemon/베이리프.png' },
               { text: '메가니움', img: '/pokemon/메가니움.png' },
            ],
            모다피: [
               { text: '모다피', img: '/pokemon/모다피.png' },
               { text: '우츠동', img: '/pokemon/우츠동.png' },
               { text: '우츠보트', img: '/pokemon/우츠보트.png' },
            ],
            케이시: [
               { text: '케이시', img: '/pokemon/케이시.png' },
               { text: '후딘', img: '/pokemon/후딘.png' },
               { text: '윤겔라', img: '/pokemon/윤겔라.png' },
            ],
         }

         const pokemon = {
            id: nextId.current,
            // 입력된 이름에 따라 미리 정의된 진화 체계를 할당
            evolutions: predefinedEvolutions[text] || [{ text, img: `/pokemon/${text}.png` }],
         }

         setPoke(pokemons.concat(pokemon))
         nextId.current += 1
      },
      [pokemons]
   )

   const onRemove = useCallback(
      (id) => {
         const removedPokemons = pokemons.filter((pokemon) => pokemon.id !== id)
         setPoke(removedPokemons)
      },
      [pokemons]
   )

   return (
      <TodoTemplate>
         <TodoInsert onInsert={onInsert} />
         <TodoList pokemons={pokemons} onRemove={onRemove} />
      </TodoTemplate>
   )
}

export default App
