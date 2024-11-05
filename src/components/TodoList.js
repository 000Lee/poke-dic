import TodoListItem from './TodoListItem'

function TodoList({ pokemons, onRemove }) {
   return (
      <div className="TodoList">
         {pokemons.map((pokemon) => (
            <TodoListItem pokemon={pokemon} key={pokemon.id} onRemove={onRemove} />
         ))}
      </div>
   )
}

export default TodoList
