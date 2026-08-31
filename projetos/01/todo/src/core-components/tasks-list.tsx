import Button from "../components/button";
import TaskItem from "./task-item";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";

function TasksList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}

export default TasksList;
