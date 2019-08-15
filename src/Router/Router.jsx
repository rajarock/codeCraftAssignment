import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import loadable from '@loadable/component'


const pathParams = [{
    path : '/',
    pageComponentName : 'Home',
}]

//  code-splitting 
const LoadableComponent = loadable(props => import(`src/Pages/${props.pageComponentName}`))

const renderRouter = (routes) => {
    return routes.map((route, idx) => {
        const { path, pageComponentName } = route 
        return (
            <Route 
                path = {route.path}
                key = {idx}
                exact = {route.exact}
                render = { (props) => {
                        return <LoadableComponent {...props} {...route} />  // - using dynamic import
                }} 
            >
            </Route>
        )
    })
}

class Routes extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    {renderRouter(pathParams)}
                </Switch>
            </Router>
            )
    }
}


export default Routes
export { Routes } 