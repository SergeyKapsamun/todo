import { useState } from 'react'
import './style.css'
const Todo=({listTask}:any)=>{

    interface listType{
        id:number,
        done:boolean,
        task:string
    }


const [list,setList]=useState(listTask)

const [activeBtn, setActiveBtn]=useState('All')
function onActive(id:number){
  const newList= list.map((elem:listType)=>elem.id===id?{id:elem.id, done:!elem.done, task:elem.task}:elem)
    setList(newList);

}

const onFilter=(value:string)=>{
    if(value==='Clear'){
        setActiveBtn('All');
        setList([...list.filter((elem:listType)=>elem.done===false)]);
    } else{

          setActiveBtn(value);
    }
  

}
const outTodo=(elem:listType)=>{

    return <div key={elem.id} className='element' ><div onClick={()=>onActive(elem.id)} className={elem.done?'checkbox-active':'checkbox'}></div>
    <div className={elem.done ? 'element-text_active':''}>{elem.task}</div></div>
}
    return<div className="todo">
    <div className="choose">
        <div className='arrow'></div><div className='todo-text'>
            Whats needs to be done?</div></div>
{list.map((elem:listType)=>{
if( activeBtn==='All'){
   return outTodo(elem) 
}else if(activeBtn==='Active' && elem.done===false){
    return outTodo(elem) 
}
else if(activeBtn==='Completed' && elem.done===true){
    return outTodo(elem) 
}
    
})}

            
            <div className="footer-todo">
                <div className="nav-todo">
                    <div >{list.filter((elem:listType)=>!elem.done).length} items left</div>
                    <div className="button-todo">
                        <div className={activeBtn==='All'?'button-todo_active':'button-btn'} onClick={()=>onFilter('All')}>All</div>
                        <div className={activeBtn==='Active'?'button-todo_active':'button-btn'} onClick={()=>onFilter('Active')}>Active</div>
                        <div className={activeBtn==='Completed'?'button-todo_active':'button-btn'} onClick={()=>onFilter('Completed')}>Completed</div>
                    </div>
                    <div className="clear-completed" onClick={()=>onFilter('Clear')}>Clear completed</div>
                </div>
                <div className="footer-link_1"></div>
                <div className="footer-link_2"></div>
            </div>
            
    </div>
}

export default Todo;