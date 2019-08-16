import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import webpackCommon from './webpack-common'
import webpackDev from './webpack-dev'


process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3500

function init(){
    const compiler = webpack(webpackDev)
    const webpackServer = new webpackDevServer(compiler,{
        historyApiFallback : true,
        stats: "errors-only"
    })
    webpackServer.listen(PORT,'localhost',()=>console.log(
        `Server listening on \x1b[42m\x1b[1mhttp://localhost:3500\x1b[0m in \x1b[41m\x1b[0m `
      ))
}
if(isProd)
{
    webpack([webpackCommon]).run((err, stats) => {})
}
else {
    init()
}