import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import webpackCommon from './webpack-common'


function init(){
    const compiler = webpack(webpackCommon)
    const webpackServer = new webpackDevServer(compiler,{
        historyApiFallback : true,
        stats: "errors-only"
    })
    webpackServer.listen(3500,'localhost',()=>console.log(
        `Server listening on \x1b[42m\x1b[1mhttp://localhost:3500\x1b[0m in \x1b[41m\x1b[0m `
      ))
}
init()