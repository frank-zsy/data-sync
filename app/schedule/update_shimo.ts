import { Subscription } from 'egg';

export default class UpdateShimo extends Subscription {
  static get schedule() {
    return {
      interval: '15m',
      type: 'worker', // only one worker needed
      immediate: false, // not update on start
    };
  }
  async subscribe() {
    const { ctx } = this;
    await ctx.service.github.update();
  }
}
