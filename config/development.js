import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import webpackCommon from './webpack-common'
import webpackDev from './webpack-dev'


process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const isProd = process.env.NODE_ENV === 'production'
process.env.PORT = process.env.PORT || 5000

function init(){
    const compiler = webpack(webpackDev)
    const webpackServer = new webpackDevServer(compiler,{
        historyApiFallback : true,
        stats: "errors-only"
    })
    webpackServer.listen(process.env.PORT,'localhost',()=>console.log(
        `Server listening on \x1b[42m\x1b[1mhttp://localhost:${process.env.PORT}\x1b[0m in \x1b[41m\x1b[0m `
      ))
}
if(isProd)
{
    webpack([webpackCommon]).run((err, stats) => {
        console.log('error message ',err, '\n stats message',stats)
    })
}
else {
    init()
}