"use client";

import { useState } from "react";
import { TaskCard } from "@/components/task-card";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Test Task 1", done: false },
    { id: 2, name: "Test Task 2", done: true },
    { id: 3, name: "Test Task 3", done: false },
    { id: 4, name: "Test Task 4", done: true },
    { id: 5, name: "Test Task 5", done: false },
    { id: 6, name: "Test Task 6", done: false },
  ]);

  const handleToggle = (taskId: number, checked: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: checked } : task
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font bold mb-6">Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskName={task.name}
            done={task.done}
            onToggle={(checked) => handleToggle(task.id, checked)}
          />
        ))}
      </div>
    </div>
  );
}
