import React from 'react';
import { observer } from 'mobx-react'
import { Row , Col } from 'react-bootstrap'
import { Sidebar, DeviceDetails, state } from '../../Component'
import './styles.scss'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function handleResize() {
  state.dimensions = getWindowDimensions();
}

window.addEventListener('resize', handleResize);

@observer
 class Home extends React.Component {
    render(){
        return (
            <div className="cc-main-container">
                <Sidebar />
                <DeviceDetails />
            </div>)
    }
}

export default Home
export { Home }