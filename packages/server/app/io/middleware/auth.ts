import { Context } from 'egg';

// Your own middleware here
export default function authMiddleware() {
  return async (ctx: Context, next: any) => {
    const say = 'hello';
    ctx.socket.emit('res', 'auth!' + say);
    await next();
    console.log('disconnect!');
  };
}
