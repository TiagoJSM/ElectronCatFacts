const { ipcMain } = require('electron')

import { IpcMainInvokeEvent } from 'electron';
import { getRandomTodo, getTodo } from './todoApi'

async function handleGetRandomFact() {
  return await getRandomTodo();
}

async function handleGetFact(event: IpcMainInvokeEvent, id: number) {
  return await getTodo(id);
}

export default function ipcMainSetup() {
  ipcMain.handle('getRandomFact', handleGetRandomFact);
  ipcMain.handle('getFact', handleGetFact);
}