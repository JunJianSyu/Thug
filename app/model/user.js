/**
 * Author: JunJianSyu
 * Date: 2020/1/2
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    name: STRING(30),
  });

  return User;
};
