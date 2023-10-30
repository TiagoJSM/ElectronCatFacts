import { net } from 'electron';

export async function getRandomTodo() {
    const response = await net.fetch('https://dummyjson.com/todos/random');
    if (response.ok) {
      const body = await response.json();
      const { id, todo } =  body;
      return { id, fact: todo };
    }
    return null;
}

export async function getTodo(id: number) {
  const response = await net.fetch(`https://dummyjson.com/todos/${id}`);
  if (response.ok) {
    const body = await response.json();
    const { id, todo } =  body;
    return { id, fact: todo };
  }
  return null;
}