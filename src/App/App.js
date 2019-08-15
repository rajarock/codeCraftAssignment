import React  from 'react'
import ReactDOM from 'react-dom'
import { Routes } from '../Router'
import './index.scss'

export default class App extends React.Component {
  render() {
    //  add code here for Header , Footer and router-less Components
    return (<Routes />)
  }
}

function renderApp() {
    ReactDOM.render(
      <App />,
    document.getElementById('app-root')
    )
}

renderApp()
