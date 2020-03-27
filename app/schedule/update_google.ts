import { Subscription } from 'egg';

export default class UpdateGoogle extends Subscription {
  static get schedule() {
    return {
      interval: '2h',
      type: 'worker', // only one worker needed
      immediate: true, // update on start
    };
  }
  async subscribe() {
    const { ctx } = this;
    await ctx.service.google.update();
  }
}
