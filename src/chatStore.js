import { defineStore } from 'pinia';

export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [
      { text: '<h3>Versión 1.pdf</h3><br><a href="/ruta-al-archivo.pdf" target="_blank">Título del archivo a subir 2.pdf</a>', uid: 'Yo' },
      { text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión', uid: 'Yo' },
      { text: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.', uid: 'Profesor' },
      { text: '<h3>Versión 2.pdf</h3><br><a href="/ruta-al-archivo.pdf" target="_blank">Título del archivo a subir 2.pdf</a>', uid: 'Yo' },
      { text: 'Realizados los cambios según el feedback', uid: 'Yo' },
      { text: 'Perfecto, excelente trabajo.', uid: 'Profesor' },
    ],
  }),
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
    clearMessages() {
      this.messages = [];
    },
  },
});