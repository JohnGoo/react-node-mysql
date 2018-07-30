/**
 * @desc 默认路由
 * @author JohnGoo
 **/

var User = require('../../database/user.db');

module.exports = {
    init: function(app) {
        app.get('/', (req, res) => {
            console.log(err)
            return res.send({
                code: 500,
                message: '出错了'
            })
        })
    }
}