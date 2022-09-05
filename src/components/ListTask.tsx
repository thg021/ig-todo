import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import s from "./ListTask.module.css";

interface IListTaskProps {
  id: number;
  todo: string;
  done: boolean;
  onDeleteTask: (idTaskToDeleted: number) => void;
  onDoneTask: (idTask: number) => void;
}

export function ListTask({
  id,
  todo,
  done,
  onDeleteTask,
  onDoneTask,
}: IListTaskProps) {
  const [isDone, setIsDone] = useState(done);

  const checkStatusTask = () => {
    setIsDone(!isDone);
    onDoneTask(id);
  };

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={s.task}>
      <a href="#" className={s.checkbox} onClick={checkStatusTask}>
        {isDone ? <CheckCircle className={s.done} weight="fill" /> : <Circle />}
      </a>

      <p className={isDone ? s.lineThrough : ""}>{todo}</p>
      <a href="#" className={s.trash} onClick={handleDeleteTask}>
        <Trash size={28} />
      </a>
    </div>
  );
}
