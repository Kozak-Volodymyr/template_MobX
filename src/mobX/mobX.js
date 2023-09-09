 import {observable,autorun,reaction,when,action, makeAutoObservable,makeObservable,computed,toJS} from 'mobx'
/* const store=observable({
    todos:[],
    name:'',
    countOfCompleted:0
})
autorun(()=>console.log(store.countOfCompleted))//all changes
store.countOfCompleted=1
const addTodo=action((todo)=>{
 store.todos.push(todo)
})
 store.todos.push('complete course')
store.todos.push('complete course')
store.todos.push('complete course')
store.todos.push('complete course') 
when(()=>store.todos.length>3,()=>{console.log('Bigger 3')})//condition
reaction(()=>store.name,(name)=>{console.log(name)})//after init */ 
class store{
    constructor(){
        makeAutoObservable(this,{},{autoBind:true})
        reaction(()=>this.todos.length,()=>
            console.log('send todos to server',toJS(this.todos))
        )
    }
    
    todos=[]; 
    name='';
    countOfCompleted=0;
    addTodo=(task)=>{
        this.todos.push({
            title:task,
            completed:false,
            id:Date.now()
        })
    }
    
    get count(){
        return this.todos.filter((todo)=>{
           return todo.completed===true
        }).length
    }
    completeTodo(id){
        const todo=this.todos.find((item)=>{
            return item.id===id
        })
        todo.completed=true;
    }
}

const todoList=new store();

export default todoList;