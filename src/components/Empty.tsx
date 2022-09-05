import clipboard from "../assets/Clipboard.svg";
import s from "./Empty.module.css";

export function Empty() {
  return (
    <div className={s.empty}>
      <img src={clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
