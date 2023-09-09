import { observer } from "mobx-react-lite"

import store from './mobX/mobX'
export const TodoList=observer(()=>{
    const {todos}=store
    return(<div>
        <ul>
        {todos && todos.map((item)=>{
            return <li key={item.id}>
                <input onClick={()=>store.completeTodo(item.id)} 
                type={'checkbox'}  
                checked={todos.checked}/> 
                {item.title}</li>
        })}
        </ul>
    </div>)
})