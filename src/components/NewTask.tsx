import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import s from "./NewTask.module.css";

interface INewTaskProps {
  onCreateTask: Function;
}
export function NewTask({ onCreateTask }: INewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");
  const handleNewTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleCreateNewTask = () => {
    event?.preventDefault();
    onCreateTask({ todo: newTaskText, done: false });
    setNewTaskText("");
  };
  return (
    <form className={s.newTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        value={newTaskText}
        onChange={handleNewTextChange}
        name="todo"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}
