/**
 * Author: JunJianSyu
 * Date: 2020/1/2
 */

const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
