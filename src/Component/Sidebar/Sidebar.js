import React from 'react'
import { observer } from 'mobx-react'
import { state } from '../Store'
import deviceData from './fixture'
import SidebarItems from './SidebarItems'
import './styles.scss'
import { backWhiteTick } from '../../images';

@observer
class Sidebar extends React.Component {
    constructor(props)
    {
        super(props)
    }
    setActiveIndex = (idx) => {
        state.activeIdx = idx
        state.activeDevice = deviceData[state.activeIdx].title
    }
    renderSideBarItems = (item, idx) => {
       const active = state.activeIdx ==  idx ? 'active' : ''
        return (<SidebarItems key={idx} item={item} idx={idx} isActive={active} activeIdxHandler={()=>this.setActiveIndex(idx)} />)
    }
    render()
    {
        const { height, width } = state.dimensions
        let divStyle = {
            'height' : height
        }
        return(
            <div className="cc-sidebar-wrapper">
                <div className="cc-sidebar-scroll-container" style={divStyle}>
                    <div className="cc-sidebar-container" >
                        <div className="cc-sidebar-bg-container">
                            {deviceData.length && deviceData.map(this.renderSideBarItems)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


export { Sidebar }
export default Sidebar