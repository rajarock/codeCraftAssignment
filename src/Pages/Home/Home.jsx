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

@observer
 class Home extends React.Component {
   constructor(props){
     super(props)
   }
   componentWillUnmount(){
    window.removeEventListener('resize');
   }
   componentDidMount() {
     state.dimensions = getWindowDimensions()
     window.addEventListener('resize',() => {  
        state.dimensions = getWindowDimensions()
    });
   }
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