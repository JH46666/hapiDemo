'use strict';

const Hapi = require('hapi');



const routes = require('./routes/index')
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    //注册插件
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: process.env.NODE_ENV !== 'production',
            // Redact Authorization headers, see https://getpino.io/#/docs/redaction
            redact: ['req.headers.authorization']
        }
    })

    await server.register(require('inert'))
    for(let api of routes){
        server.route(api)
    }

    // server.route({
    //     method: "get",
    //     path:"/hello",
    //     handler: function(request,h){
    //         // return 'hello world'
    //         return test()
    //     }
    // })
    await server.start();
    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();