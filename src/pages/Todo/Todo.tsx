import React, { useState } from "react";
import Input from "../../shared/ui/components/Input/Input";
import cls from "./Todo.module.scss";
import Button from "../../shared/ui/components/Button/Button";

type Todo = {
  id: number;
  inputValue: string;
  isDone: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [todo, setTodo] = useState<Todo>({
    id: Date.now(),
    inputValue: "",
    isDone: false,
  });

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({
      ...prev,
      inputValue: e.target.value,
    }));
  };

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (!todo.inputValue.trim()) return;

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, inputValue: todo.inputValue } : todo,
        ),
      );
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          inputValue: todo.inputValue,
          isDone: false,
        },
      ]);
    }

    setEditId(null);

    setTodo({
      id: Date.now(),
      inputValue: "",
      isDone: false,
    });
  };

  const handleRemoveTask = (removeId: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== removeId));
  };

  const handleEditTask = (todo: Todo) => {
    setEditValue(todo.inputValue);
    setEditId(todo.id);
  };

  const handleSaveEdit = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, inputValue: editValue } : todo,
      ),
    );

    setEditId(null);
    setEditValue("");
  };

  const toggleChengeCheck = (todoId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className={cls.input_box}>
        <Input
          className={cls.input_style}
          type="text"
          placeholder="Введите новую заметку"
          value={todo.inputValue}
          onChange={(e) => handleChangeInputValue(e)}
          onKeyDown={(e) => handleKeyEnter(e)}
        />

        <Button classNames={[cls.btnAdd]} onClick={handleAddTask}>
          Добавить
        </Button>
      </div>

      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className={cls.todo}>
            {editId === todo.id ? (
              <>
                <Input
                  className={cls.editInput}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />

                <Button
                  classNames={[cls.btnAdd]}
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  Сохранить
                </Button>
              </>
            ) : (
              <>
                <li className={todo.isDone ? cls.cheked : ""}>
                  {todo.inputValue}
                </li>

                <Button
                  classNames={[cls.btnAdd]}
                  onClick={() => handleEditTask(todo)}
                >
                  Редактировать
                </Button>
              </>
            )}

            <Button
              classNames={[cls.btnDel]}
              onClick={() => handleRemoveTask(todo.id)}
            >
              Удалить
            </Button>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleChengeCheck(todo.id)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
