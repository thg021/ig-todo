import s from "./Info.module.css";

type Task = {
  id: number;
  todo: string;
  done: boolean;
};
interface IInfoProps {
  tasks: Task[];
}
export function Info({ tasks }: IInfoProps) {
  const countTasksDone = () => {
    const totalTasks = tasks.reduce(
      (total, task) => (task.done ? (total += 1) : total),
      0
    );

    if (totalTasks === 0) {
      return 0;
    } else {
      return `${totalTasks} de ${tasks.length}`;
    }
  };

  const total = countTasksDone();
  return (
    <header className={s.info}>
      <div>
        <span className={`${s.status} ${s.colorBlue}`}>Tarefas criadas</span>
        <span className={s.counter}>{tasks.length}</span>
      </div>
      <div>
        <span className={`${s.status} ${s.colorPurple}`}>Concluídas</span>
        <span className={s.counter}>{total}</span>
      </div>
    </header>
  );
}
