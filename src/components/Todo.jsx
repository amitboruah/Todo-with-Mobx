import React, { useState } from "react";
import {observer} from "mobx-react"

export const Todo = observer((props) =>{
  const [value, setValue] = useState("");

  return (
    <>
      <div
        className="main"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div className="container">
          <input
            type="text"
            style={{ height: "30px", borderRadius: "5px" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button style={{ height: "35px", borderRadius: "5px" }}
          onClick={()=>{
              props.todostore.addTodo(value);setValue("")
          }}>add</button>

          <ul>
              {
                  props.todostore.todos.map((ele)=>{
                    return <li>{ele.title}</li>
                  })
              }
          </ul>
        </div>
      </div>
    </>
  );
})
