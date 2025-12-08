import { defineStore, acceptHMRUpdate } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isLeftDrawerOpen: false,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
}
