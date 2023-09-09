import { observer } from "mobx-react-lite"
import store from './mobX/mobX'
export const Completed=observer(()=>{
    return(<h1>Completed:{store.count}</h1>)
})