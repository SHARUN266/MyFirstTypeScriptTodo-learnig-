import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoList from "../TodoList";
type Todo = {
  id: number;
  content: string;
  isComplete: boolean;
};
type creteTodo = {
  content: string;
  isComplete: boolean;
};
const getTodo = async () => {
  let res: AxiosResponse<Todo[]> = await axios.get(
    "http://localhost:8080/todos"
  );
  return res.data;
};
const postTodo = async (params: creteTodo) => {
  let res: AxiosResponse<Todo> = await axios.post(
    "http://localhost:8080/todos",
    params
  );
  return res.data;
};



export default function Todo() {
  const [todo, setTodo] = useState<Array<Todo>>([]);
 
  const addNewTodo = (content: string) => {
    if (content) {
      postTodo({ content, isComplete: false }).then((d) => {
        setTodo([...todo, d]);
      });
    }
  };
  useEffect(() => {
    Fetch();
  }, []);
  function Fetch() {
    getTodo()
      .then((res) => setTodo(res))
      .catch((e) => console.log(Error));
  }
  const DeleteTask = async (id: number) => {
    await axios.delete(`http://localhost:8080/todos/${id}`);

    Fetch();
  };
  const StatusUpdate=async(id:number)=>{
    await axios.patch(`http://localhost:8080/todos/${id}`,{...Todo,isComplete:true})
    Fetch()
  }
  return (
    <div>
      Todo
      <TodoInput onAdd={addNewTodo} />
      {todo.map((elem) => (
        <TodoItem key={elem.id} {...elem} Status={StatusUpdate} handleToggle={DeleteTask} />
      ))}
    </div>
  );
}
