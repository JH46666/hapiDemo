const hello = {
    method: "get",
    path: "/hello",
    handler: function (request, h) {
        return 'hello world'
        // return test()
    }
}

const index = {
    method: "get",
    path: "/index",
    handler: function (request, h) {
        // return 'hello world'
        return {
            data: "hello world tt"
        }
    }
}

module.exports = [hello,index];