import './style.css'
const Todo=()=>{

    return<div className="todo">
    <div className="choose">
        <div className='arrow'></div><div className='todo-text'>
            Whats needs to be done?</div></div>
            <div className='element'><div className='checkbox'></div>
            <div className='element-text'>Тестовое задание</div></div>

            <div className='element'><div className='checkbox'></div>
            <div className='element-text'>Прекрасный код</div></div>
            

            <div className='element'><div className='checkbox'></div>
            <div className='element-text'>Покрытие тестами</div></div>
            
            
    </div>
}

export default Todo;