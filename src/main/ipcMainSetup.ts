import { ipcMain } from 'electron';

import { IpcMainInvokeEvent } from 'electron';
import { getRandomTodo, getTodo } from './todoApi'
import { BrowserWindow } from 'electron/main';

async function handleGetRandomFact() {
  return await getRandomTodo();
}

async function handleGetFact(event: IpcMainInvokeEvent, id: number) {
  return await getTodo(id);
}

function updateFacts(win: BrowserWindow) {
  win.webContents.send('update-facts');
}

export default function ipcMainSetup(win: BrowserWindow) {
  ipcMain.handle('getRandomFact', handleGetRandomFact);
  ipcMain.handle('getFact', handleGetFact);
}