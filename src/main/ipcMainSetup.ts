const { ipcMain } = require('electron')

import { fetchRandomTodo } from './todoApi'

async function handleGetFact () {
    return await fetchRandomTodo();
  }

  export default function ipcMainSetup(){
    ipcMain.handle('getFact', handleGetFact)
  }