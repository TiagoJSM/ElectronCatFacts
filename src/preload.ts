// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('catFactAPI', {
  getRandomFact: () => ipcRenderer.invoke('getRandomFact'),
  getFact: (id: number) => ipcRenderer.invoke('getFact', id),
})
