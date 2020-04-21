import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // app.io.of('/chat')
  app.io.of('/p2p').route('p2p', app.io.controller.p2p.index);
};
