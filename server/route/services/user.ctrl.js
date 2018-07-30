/**
 * @desc user 控制器
 * @author JohnGoo
 **/

var User = require('../../database/user.db');

module.exports = {
    // 模块初始化
    init: function(app) {
        app.get('/user', this.doGetUserAllItems)
    },
    // 获取所有用户信息
    doGetUserAllItems: function(req, res) {
        var props = {};  //默认参数为空
        var user = new User({props: props});
        user.getUserAllItems(function(err, data) {
            if (data.length) {
                return res.send({
                    code: 200,
                    data: data
                })
            } else {
                console.log(err)
                return res.send({
                    code: 500,
                    message: '出错了'
                })
            }
        })
    }
}