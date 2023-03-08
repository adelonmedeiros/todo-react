import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: "1",
      title: "Estudar React",
      isCompleted: true,
    },

    {
      id: "2",
      title: "Estudar Next.js",
      isCompleted: false,
    },
  ]);

  function addTask(title: string) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTaskById(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  );
}
