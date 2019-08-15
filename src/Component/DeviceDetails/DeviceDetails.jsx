import React from 'react';
import { Row , Col } from 'react-bootstrap'
import Media from 'react-media'
import Roundy from 'roundy'
import { observer } from 'mobx-react'
import { state } from '../Store'
import { ShadesData, Modes } from './fixture'
import { 
    tickWhite, 
    tickShadow,
    morningWhite, 
    dayDark, 
    nightDark, 
    plusDark, 
    backWhiteTick 
} from '../../images'
import './styles.scss'



@observer
class DeviceDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            toggled : true, 
            activeShadeIdx : 0,
            activeModeIdx: 0,
            roundyValue : 64
         }
    }
    
    toggleHandler = () => {
        this.setState({toggled : !this.state.toggled})
    }

    shadeClickHandler = (idx) => {
        this.setState({activeShadeIdx: idx})
    }
    modeClickHandler = (idx) => {
        this.setState({activeModeIdx: idx})
    }
    roundyClickHandler = (value) => {
        this.setState({roundyValue: value})
    }

    renderShadedList = () => {
        return ShadesData.map((item, idx) => {
            const { activeShadeIdx } = this.state
            const activeColor = activeShadeIdx == idx ? 'selected' : ''
            let divStyle = {
                'backgroundColor' : item.colorCode
            }
            return(
                <div className={`cc-shades-value ${activeColor}`} key={idx} style={divStyle} onClick={() => this.shadeClickHandler(idx) } >
                    { activeColor && <img src={tickWhite}/>} 
                </div>)
        })
    }
    renderModeSelection = () => {
        return Modes.map((item, idx) => {
            const { activeModeIdx } = this.state
            const { darkMode, lightMode, label, value } = item
            const activeClass = activeModeIdx == idx ? 'active' : ''
            const tickSrc = activeModeIdx == idx ? tickWhite : tickShadow
            const modeSrc = activeModeIdx == idx ? lightMode : darkMode

            return (
                <div className={`cc-session-mode ${activeClass}`} key={idx} onClick={()=> { this.modeClickHandler(idx)}} >
                    <img className="cc-session-mode-img" src={modeSrc} />
                    <span> {label} </span>
                    <div> {value} </div>
                    <img src={tickSrc} />
                </div>
            )
        })
    }

    renderRoundyTheme = () => {
        const { roundyValue } = this.state
        return (<Media query="(max-width: 767px)">
        { matches =>
            matches ? 
            <Roundy
            value={roundyValue}
            allowClick
            arcSize={180}
            rotationOffset={0}
            radius={77.5}
            bgColor="#979797"
            color="#AD6BFF"
            strokeWidth={5}
            thumbSize={26}
            max={120}
            onChange={val => {
              this.roundyClickHandler(val)
            }}
          />
          :
          <Roundy
        value={roundyValue}
        allowClick
        arcSize={180}
        rotationOffset={0}
        radius={130}
        bgColor="#979797"
        color="#AD6BFF"
        strokeWidth={5}
        thumbSize={26}
        max={130}
        onChange={val => {
          this.roundyClickHandler(val)
        }}
      />
        }
      </Media>)
    }


    render() {
        const toggleClass = this.state.toggled ? 'toggled' : ''
        const { height, width } = state.dimensions
        let divStyle = {
            'height' : height
        }
        return (
            <div className="cc-right-container" style={divStyle}>
                <img src={backWhiteTick} className="cc-sidebar-back" />
                <div className="cc-device-title-container">
                    <div className="cc-device-title"> Devices </div>
                    <div className="cc-device-plus"> <img src={plusDark}/>  </div>
                </div>
                <div className={`cc-device-name-container`} onClick={()=> { this.toggleHandler()}}>
                    <span className="cc-device-name"> {state.activeDevice} </span>
                    <div className={`cc-device-selector`}><div className={`cc-device-selector-icon  ${toggleClass}`}></div></div>
                </div>
                <div className="cc-shades-label-container">
                    <div className="cc-shades-label"> SHADES </div>
                    <div className="cc-dotted-line"></div>
                </div>
                <div className="cc-shades-box-container">
                    {this.renderShadedList()}
                </div>
                <div className="cc-mode-label-container">
                    <div className="cc-mode-label"> MODE </div>
                    <div className="cc-dotted-line"></div>
                </div>
                <div className="cc-session-container">
                    {this.renderModeSelection()}
                </div>
                <div className="cc-intensity-label-container">
                    <div className="cc-intensity-label"> INTENSITY </div>
                    <div className="cc-dotted-line"></div>
                </div>
                <div className="cc-roundy-container">
                    {this.renderRoundyTheme()}
                    <div className="cc-roundy-value">{this.state.roundyValue}</div>
                </div>
            </div>)
    }
}

export default DeviceDetails
export { DeviceDetails }