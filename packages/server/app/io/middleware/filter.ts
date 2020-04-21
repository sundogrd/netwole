import { Context } from 'egg';

// Your own middleware here
export default function fooMiddleware() {
  return async (ctx: Context, next: any) => {
    console.log(ctx.packet);
    const say = await ctx.service.user.say();
    ctx.socket.emit('res', 'packet!' + say);
    await next();
    console.log('packet response!');
  };
}
