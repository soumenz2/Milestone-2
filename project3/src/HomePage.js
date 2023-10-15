import { useState } from "react";
import './style.css'
const Homepage = () => {
 const [toDo,setToDo]=useState([])
 const [task,setTask]=useState();

const addbutton=()=>{
    if(task){
        setToDo([...toDo,{task,completed:false}])
        setTask('')
    }
}
const updateStatus=(index)=>{
  const updatedList=[...toDo]
  updatedList[index].completed=!updatedList[index].completed
  setToDo(updatedList)
  
}
const RemoveList=(index)=>{
  const updatedList=toDo.filter((_,i)=>i!==index)
  setToDo(updatedList)
}
  return (
    <div >
      <div className="Title">
        <h1>To Do List</h1>
      </div>
      <div className="InputArea"
      >
        <input type="text input" placeholder="Write something" value={task} onChange={e=>setTask(e.target.value)} />
        <button onClick={addbutton}>Add</button>
      </div>
      <div className="BoxArea">
        {toDo.map((todo,index)=>{
            return (
              <div className="Box">
                <div>
                  {index + 1}.{todo.task}
                </div>
                <div>
                  status:{todo.completed === true ? "Completed" : "pending"}
                </div>
                <div>
                  <button onClick={() => updateStatus(index)}>
                    Update Status
                  </button>
                  </div><div>
                  <button onClick={() => RemoveList(index)}>Remove</button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Homepage;
