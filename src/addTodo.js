import { observer } from "mobx-react-lite"
import {useState} from 'react'
import store from './mobX/mobX'
export const AddTodo=observer(()=>{
    const onSubmit=(e)=>{
        e.preventDefault();
        store.addTodo(data);
        setDate('')
    }
    const [data,setDate]=useState('');
    return <div><form onSubmit={onSubmit}>
        <input value={data} type={'text'} onChange={(e)=>setDate(e.target.value)}></input>
        <button type="submit">add todo</button>
        </form></div>

})