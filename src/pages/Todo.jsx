import React, { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  const getTodos = () => {
    fetch("https://todo-rest-api.vercel.app/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.err("Error", err));
  };

  const completeTodo = async (id) => {
    const data = await fetch(
      `https://todo-rest-api.vercel.app/todo/${id}`
    ).then((res) => res.json);

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.completed = data.completed;
        }
        return todo;
      })
    );

    getTodos();
  };

  const deleteTodo = async (id) => {
    const data = await fetch(`https://todo-rest-api.vercel.app/todo/${id}`, {
      method: "DELETE",
    });
    getTodos();
  };

  const addTodo = async () => {
    const data = await fetch("https://todo-rest-api.vercel.app/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    }).then((res) => res.json());

    setTodos([...todos, data]);
    setPopupActive(false);
    setNewTodo("");
  };

  return (
    <div className="App bg-[#202B3E] h-screen text-white p-[32px]">
      <h1 className="font-bold text-[40px] mb-[32px]">Welcome The Hardest</h1>
      <h4 className="text-[18px] text-[#61759b] uppercase font-normal mb-[16px]">
        Your Tasks
      </h4>
      <div className="todos">
        {todos && todos?.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
              className="todo relative bg-[#131A26] p-[16px] rounded-[16px] flex items-center transition-[0.5s] cursor-pointer mb-[16px] hover:opacity-70"
            >
              <div
                className={`checkbox w-[20px] h-[20px] mr-[16px] rounded-[999px] bg-[#202B3E] transition-[0.4s] ${
                  todo.completed
                    ? "bg-[#D81E5B] bg-gradient-to-b from-[#D81E5B] to-[#8A4EFC] transition-[0.4s]"
                    : ""
                }`}
              ></div>
              <div
                className={`text text-[20px] ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.text}
              </div>
              <div
                onClick={() => deleteTodo(todo._id)}
                className="delete-todo absolute top-[50%] right-[16px] translate-y-[-50%] w-[24px] h-[24px] text-[#EEE] bg-[#AF1E2D] rounded-[50%] flex justify-center items-center"
              >
                x
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>"Click the on + to Create Tasks"</h3>
          </div>
        )}
      </div>

      <div
        className="addPopup fixed bottom-[32px] right-[32px] flex justify-center items-center w-[64px] h-[64px] rounded-[999px] text-[28px] font-black text-[#EEE] bg-gradient-to-b from-[#D81E5B] to-[#8A4EFC] cursor-pointer"
        onClick={() => setPopupActive(true)}
      >
        +
      </div>

      {popupActive ? (
        <div className="popup fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] max-w-[400px] bg-[#EEE] p-[32px] rounded-[16px] shadow-xl">
          <div
            className="closePopup absolute top-[16px] right-[16px] w-[20px] h-[20px] text-[18px] text-[#EEE] cursor-pointer flex justify-center items-center bg-[#D81E5B] rounded-[50%]"
            onClick={() => setPopupActive(false)}
          >
            x
          </div>

          <div className="content">
            <h3 className="text-[#131A26] font-normal uppercase mb-[16px]">
              Add Task
            </h3>
            <input
              type="text"
              className="add-todo-input appearance-none border-none outline-none bg-white p-[16px] rounded-[16px] w-[100%] shadow-2xl text-[20px] text-black"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
              autoFocus
            />
            <div
              className="button p-[12px] rounded-[99px] inline-block font-bold uppercase text-[18px] mt-[16px] text-center cursor-pointer bg-gradient-to-b from-[#D81E5B] to-[#8A4EFC]"
              onClick={addTodo}
            >
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Todo;
