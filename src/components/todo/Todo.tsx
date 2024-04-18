import { useState } from "react";
import "./style.css";
const Todo = ({ listTask }: any) => {
  interface listType {
    id: number;
    done: boolean;
    task: string;
  }
  enum Status {
    All = "All",
    Active = "Active",
    Completed = "Completed",
    Clear = "Clear",
  }

  const [list, setList] = useState(listTask);
  const [activeBtn, setActiveBtn] = useState(Status.All);
  const [outTask, setOutTask]=useState(false);

  function onActive(id: number) {
    const newList = list.map((elem: listType) =>
      elem.id === id ? { id: elem.id, done: !elem.done, task: elem.task } : elem
    );
    setList(newList);
  }

  const onFilter = (value: Status) => {
    if (value === Status.Clear) {
      setActiveBtn(Status.All);
      setList([...list.filter((elem: listType) => elem.done === false)]);
    } else {
      setActiveBtn(value);
    }
  };
  const outTodo = (elem: listType) => {
    return (
      <div key={elem.id} className="element">
        <div
          onClick={() => onActive(elem.id)}
          className={elem.done ? "checkbox-active" : "checkbox"}
        ></div>
        <div className={elem.done ? "element-text_active" : ""}>
          {elem.task}
        </div>
      </div>
    );
  };
  return (
    <div className="wrapper-todo">
        <h1>Todos</h1>
         <div className="todo">
      <div className="choose">
        <div className="arrow" onClick={()=>setOutTask(!outTask)}></div>
        <div className="todo-text">Whats needs to be done?</div>
      </div>
     {outTask && <div>
          {list.map((elem: listType) => {
        if (activeBtn === Status.All) {
          return outTodo(elem);
        } else if (activeBtn === Status.Active && elem.done === false) {
          return outTodo(elem);
        } else if (activeBtn === Status.Completed && elem.done === true) {
          return outTodo(elem);
        }
      })}

      <div className="footer-todo">
        <div className="nav-todo">
          <div>
            {list.filter((elem: listType) => !elem.done).length} items left
          </div>
          <div className="button-todo">
            <div
              className={
                activeBtn === "All" ? "button-todo_active" : "button-btn"
              }
              onClick={() => onFilter(Status.All)}
            >
              All
            </div>
            <div
              className={
                activeBtn === Status.Active ? "button-todo_active" : "button-btn"
              }
              onClick={() => onFilter(Status.Active)}
            >
              Active
            </div>
            <div
              className={
                activeBtn === Status.Completed ? "button-todo_active" : "button-btn"
              }
              onClick={() => onFilter(Status.Completed)}
            >
              Completed
            </div>
          </div>
          <div
            className="clear-completed"
            onClick={() => onFilter(Status.Clear)}
          >
            Clear completed
          </div>
        </div>
        <div className="footer-link_1"></div>
        <div className="footer-link_2"></div>
      </div>
      </div>} 
     
    
    </div> 
    </div>
  
  );
};

export default Todo;
