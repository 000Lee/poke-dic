import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   return (
      <div className="TodoTemplate">
         <div className="app-title">PokeMon</div>
         <div className="content">{children}</div>
      </div>
   )
}
//children-> TodoInsert,TodoList
export default TodoTemplate
