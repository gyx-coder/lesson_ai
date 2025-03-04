/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1740482491081_300';

  // add your middleware config here
  config.middleware = [];
  // 安全性
  config.security = {
    csrf:{
      enable:false,
      ignoreJSON:true
    },
    domainWhiteList:['*']
  }
  // 
  exports.sequelize={
    dialog:'mysql',
    host:'localhost',
    port:'3306',
    database:'zhangsan',
    username:'root',
    password:'123456',
    define:{
      timestamps:false, // 自动添加时间戳
      freezeTableName:true, // 表名不自动加s
      underscored:true // 驼峰转下划线
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
