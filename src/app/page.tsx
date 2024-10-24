'use client';

import { useState } from 'react';
import Task from '@/components/Task';
import Input from '@/components/Input';

const placeholderTasks = [
  { id: "1", title: "Complete project proposal", date: new Date("2024-02-15T00:00:00"), completed: false },
  { id: "2", title: "Review code changes", date: new Date("2024-11-16T00:00:00"), completed: true },
  { id: "3", title: "Prepare presentation", date: null, completed: false },
];

const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 12 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

export default function Home() {
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [tasks, setTasks] = useState(placeholderTasks);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdate = (id: string, field: 'title' | 'date', value: string | Date | null) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, [field]: value } : task
    ));
  };

  const handleToggleCompleted = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (title.trim()) {
      const newTask = {
        id: generateRandomId(),
        title,
        date: date || null,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDate(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[300px]">
        <div className="pt-28 bg-[#242424]/95 sticky top-0 z-50 rounded-b-md">
          <Input
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
            title={title}
            setTitle={setTitle}
            date={date}
            setDate={setDate}
            onAddTask={handleAddTask}
          />
        </div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              date={task.date}
              completed={task.completed}
              handleDelete={() => handleDelete(task.id)}
              handleUpdate={handleUpdate}
              handleToggleCompleted={() => handleToggleCompleted(task.id)}
              isInputHovered={isInputHovered}
            />
          ))
        ) : (
          <div className="text-center mt-8 text-white">
            <h3 className="text-lg font-semibold">No tasks yet.</h3>
            <p className="text-sm italic">Which is totally fine.
              It's okay to do nothing.
              But also, you can add a task above</p>
          </div>
        )}
      </div>
    </div>
  );
}
