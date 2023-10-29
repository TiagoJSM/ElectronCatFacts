const { net } = require('electron')

export async function fetchRandomTodo() {
    const response = await net.fetch('https://dummyjson.com/todos');
    if (response.ok) {
      const body = await response.json();
      const randomIndex = Math.floor(Math.random() * body.todos.length);
      return body.todos[randomIndex].todo;
    }
    return null;
}