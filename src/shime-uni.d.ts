/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-interface */
export { }

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks { }
}
