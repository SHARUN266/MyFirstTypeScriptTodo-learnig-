import React from "react";
import Todo from "./Todo";
type Todo = {
  id: number;
  content: string;
  isComplete: boolean;
};

type TodoPros = {
  id: number;
  content: string;
  isComplete: boolean;
  handleToggle(id:number): void;
  Status(id:number):void;
};
export default function TodoItem({ content, id,isComplete,handleToggle,Status }: TodoPros) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {" "}
      {content}<button  onClick={()=>{Status(id)}}  >{isComplete?"Complete":"Not Done"}</button> <button  onClick={()=>{handleToggle(id)}}  >Delete</button>
    </div>
  );
}
