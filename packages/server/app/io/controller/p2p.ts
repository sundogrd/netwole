import { Controller } from 'egg';

export default class P2PController extends Controller {
  public async index() {
    const message = this.ctx.args[0];
    console.log('chat :', message + ' : ' + process.pid);
    const say = 'keke';
    this.ctx.socket.emit('res', say);
  }
}
