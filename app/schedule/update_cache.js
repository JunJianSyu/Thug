/**
 * Author: JunJianSyu
 * Date: 2020/1/2
 */

// cron-parser 插件 定时任务
const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      interval: '60m', // 1分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.curl('http://www.api.com/cache', {
      contentType: 'json',
    });
    this.ctx.app.logger.info(`UpdateCache: ${JSON.stringify(res.data)}`);
    this.ctx.app.cache = res.data;
  }
}

module.exports = UpdateCache;
