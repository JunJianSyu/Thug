/**
 * Author: JunJianSyu
 * Date: 2020/1/2
 */

const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
  return async function gzip(ctx, next) {
    console.log(JSON.stringify(options));
    console.log('middleware => gzip');
    await next();

    let body = ctx.body;
    if (!body) return;
    if (options.threshold && ctx.length < options.threshold) return;
    if (isJSON(body)) body = JSON.stringify(body);

    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  };
};
