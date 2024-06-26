import React, { useRef, useState } from "react";
import Item from "./item";
import { list } from "postcss";
function App() {
  const input = useRef(null);
  const [list, setList] = useState(["WELCOME "]);
  const [done, setDone] = useState([]);
  const keyHandler = (event) => {
    if (event.key == "Enter") addTodo();
  };
  const addTodo = () => {
    let task = input.current.value;
    if (task == "") return;
    setList((prev) => [...prev, task]);
    input.current.value = "";
  };

  const deleteTodo = (index) => {
    setList((prev) => prev.filter((_, key) => key != index));
  };
  const moveUp = (index) => {
    if (index < 1) return;
    let prev=list;
    prev.forEach((_, i) => {
        if (i == index) {
          let x = prev[i - 1];
          prev[i - 1] = prev[i];
          prev[i] = x;
        }
      });
    setList([...prev]);
  };
  const moveDown = (index) => {
    if (index >= list.length-1) return;
    let prev=list;
    prev.forEach((_, i) => {
        if (i == index) {
          let x = prev[i + 1];
          prev[i + 1] = prev[i];
          prev[i] = x;
        }
      });
    setList([...prev]);
  };
  const moveToDone=(index)=>{
    let element = list[index]
    setDone(prev=>[...prev,element])
    deleteTodo(index)
  }

  return (
    <div>
      <input
        placeholder="Enter a Task"
        ref={input}
        className=" uppercase rounded-md shadow-md shadow-black p-2 m-2 border-solid border-violet-500 border-4  hover:border-violet-400 "
        type="text"
        onKeyDown={keyHandler}
      />
      <button onClick={addTodo}>ADD✍️</button>
      <h2 className=" flex items-center bg-red-400">TODO <button className="text-sm" onClick={()=>setList([])}>🗑️</button> </h2>
      <ol className="min-h-36">
        {list.map((item, key) => (
          <Item
            value={item}
            key={key}
            index={key}
            delete={deleteTodo}
            up={moveUp}
            down={moveDown}
            done={moveToDone}
            isDone={false}
          ></Item>
        ))}
      </ol>
     <hr />
     <h2 className=" flex items-center bg-green-400">COMPLETED <button  className="text-sm"  onClick={()=>setDone([])}>🗑️</button></h2>
      <ol>
        {done.map((item, key) => (
          <Item
            value={item}
            key={key}
            index={key}
            isDone={true}
          ></Item>
        ))}
      </ol>
    </div>
  );
}

export default App;
