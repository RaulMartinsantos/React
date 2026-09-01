import TaskItem from "./task-item";
import useTask from "../hooks/use-task";
import Button from "../components/button";
import useTasks from "../hooks/use-tasks";
import { TaskState, Task } from "../models/task";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";

function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();
  function handleNewTask() {
    prepareTask();
  }
  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}

export default TasksList;
