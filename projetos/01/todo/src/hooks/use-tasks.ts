import React from "react";
import { delay } from "../helpers/utils";
import { useLocalStorage } from "usehooks-ts";
import { TASK_KEY, TaskState, type Task } from "../models/task";

function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      console.time("Carregando tarefas...");
      await delay(2000);
      setIsLoadingTasks(false);
      console.timeEnd("Carregando tarefas...");
    }

    setTasks(tasksData);
  }

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}

export default useTasks;
