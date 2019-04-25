const path = require('path')

const test = {
    method: "get",
    path: "/test",
    handler: function (request, h) {
        request.logger.info('in handler %s', request.path);
          
        return h.file(path.join(__dirname, '../public/hello.html'))
        // return test()
    }
}
module.exports = [test];