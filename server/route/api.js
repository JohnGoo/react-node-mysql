/**
 * @desc 路由，配置路由级中间件
 * @author JohnGoo
 **/

let express = require('express');
let router = express.Router();
let fs = require('fs');

const FS_PATH_SERVICES = './route/services/';
const REQUIRE_PATH_SERVICES = './services/';

router.use(function (req, res, next) {
    next();
});

try {
    var list = fs.readdirSync(FS_PATH_SERVICES);
    for (var e; list.length && (e = list.shift());) {
        var service = require(REQUIRE_PATH_SERVICES + e);
        service.init && service.init(router);
    }
} catch(e) {
    console.log(e);
}

module.exports = router;