import { Empty } from "./Empty";
import { Info } from "./Info";
import { NewTask } from "./NewTask";
import { ListTask } from "./ListTask";

import s from "./Todo.module.css";
import { useState } from "react";
interface ITasks {
  id: number;
  todo: string;
  done: boolean;
}
export function Todo() {
  const [listTasks, setListTasks] = useState<ITasks[]>([]);

  function createNewTask(task: ITasks) {
    setListTasks([...listTasks, { ...task, id: listTasks.length + 1 }]);
  }

  function deleteTask(idTaskToDeleted: number) {
    const tasksWithoutDeletedOne = listTasks.filter(
      (task) => task.id !== idTaskToDeleted
    );
    setListTasks([...tasksWithoutDeletedOne]);
  }

  function doneTask(idTask: number) {
    const listTasksModified = listTasks.map((task) => {
      if (task.id === idTask) {
        task.done = !task.done;
      }
      return task;
    });

    setListTasks([...listTasksModified]);
  }

  return (
    <div className={s.content}>
      <NewTask onCreateTask={createNewTask} />

      <section className={s.tasks}>
        <Info tasks={listTasks} />
        <div className={s.list}>
          {listTasks.length === 0 && <Empty />}
          {listTasks.map((task) => (
            <ListTask
              key={task.id}
              id={task.id}
              todo={task.todo}
              done={task.done}
              onDeleteTask={deleteTask}
              onDoneTask={doneTask}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
