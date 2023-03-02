import React,{useState} from 'react'

function App() {
  const [Editing, setEditing] = useState(false)
  const [inpVal, setinpVal] = useState("")
  const [Todos, setTodos] = useState([])
  const [currTodo, setcurrTodo] = useState({})
  function handleAdd(){
    setTodos([...Todos, {id: Todos.length+1, text: inpVal}])
    setinpVal("")
  }
 function handleDelete(id) {
  const afterDelete = Todos.filter((todo)=>{
    return todo.id !==  id 
  })
  setTodos(afterDelete)
  setEditing(false)
  
 }
function handleEdit(todo) {
  setEditing(true)
  setcurrTodo({...todo})
  console.log(todo)
  
  
}
function handleUpdate(e) {
e.preventDefault()
handleUpdateAfter(currTodo, currTodo.id)

}

  function handleUpdateAfter(updtTodo, id){
    const updatedlist = Todos.map((todo)=>{
      return todo.id === id ?  updtTodo : todo
    })
    setTodos(updatedlist)
    
  }


function handleEditChange(e) {
  e.preventDefault()
  setcurrTodo({...currTodo, text: e.target.value})

  
}

 return (<>
    {Editing ? 

<div className='main'>
<div className='input'>
  <input type="text" value={currTodo.text} onChange={(e)=>{handleEditChange(e)}} placeholder="Enter" />
  <button onClick={handleUpdate}>Update</button>
  <button onClick={()=>{setEditing(false)}}>Cancel</button>
</div>
<div className='output'>
  {Todos.map((todo, index)=>{
    return(<div key={index}>
    <h2>{todo.text}</h2>
    <button onClick={()=>{handleDelete(todo.id)}}>x</button>
    <button onClick={()=>{handleEdit(todo)}}>Edit</button>
    </div>)
  })}
</div>
</div>
    :

    <div className='main'>
      <div className='input'>
        <input type="text" value={inpVal} onChange={(e)=>{setinpVal(e.target.value)}} placeholder="Enter" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className='output'>
        {Todos.map((todo, index)=>{
          return(<div key={index}>
          <h2>{todo.text}</h2>
          <button onClick={()=>{handleDelete(todo.id)}}>x</button>
          <button onClick={()=>{handleEdit(todo)}}>Edit</button>
          </div>)
        })}
      </div>
    </div>
    }
    
    </>)
}

export default App