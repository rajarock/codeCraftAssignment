import React from 'react'
import {
    airConditioner,
    lampLight,
    lockDevice,
    thermostat,
    television
} from '../../images'
import './styles.scss'

class SidebarItems extends React.Component {
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        const { src, title, desc } = this.props.item
        const { idx , activeIdxHandler, isActive } = this.props

        return (
                    <div className={`cc-sidebar-item d-flex position-relative ${isActive}`} onClick={() => activeIdxHandler(idx)}>
                        <img className="cc-card-image position-absolute" src={src} alt={title}/>
                        <div className={`cc-card-detail bg-white flex-column`}>
                            <div className="cc-card-title text-uppercase">{title}</div>
                            <div className="cc-card-desc text-capitalize"><span>in </span>{desc}</div>
                        </div>
                        {
                            isActive && (
                                <div className="cc-selected-item-nav d-flex justify-content-center align-items-center">
                                    <i className="arrow right"></i>
                                </div>
                            )
                        }
                    </div>
        )
    }
    
}

export { SidebarItems }
export default SidebarItems