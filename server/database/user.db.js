/**
 * @desc user 数据模型
 * @author JohnGoo
 **/

let mysql = require('mysql'),
    util = require('../utils/util'),
    config = require('./config.db');

var con = mysql.createConnection(config);

/*用户模块 构造方法*/
var User = function(user) {
    this.props = user.props  //参数集合，借鉴react设计思想
};

/*获取全部数据,测试接口使用，正式上线时请关闭*/
User.prototype.getUserAllItems = function(callback) {
    var _sql = "select * from car_admin where name='admin'";
    util.db_query({
        connect: con,
        sql: _sql,
        name: 'getUserAllItems',
        callback: callback
    })
};

module.exports = User;