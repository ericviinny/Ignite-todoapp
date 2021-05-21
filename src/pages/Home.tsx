import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (!(newTaskTitle.length > 0)) return;

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const aTask = tasks.filter((task: Task) => task.id === id);
    const data = {
      id: aTask[0].id,
      title: aTask[0].title,
      done: !aTask[0].done
    }

    const nTask = tasks.filter((task: Task) => task.id !== id);
    setTasks([...nTask, data]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState: Task[]) => oldState.filter((task: Task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}