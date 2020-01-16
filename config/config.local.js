/**
 * Author: JunJianSyu
 * Date: 2020/1/2
 */

'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };

  return {
    ...config,
  };
};
