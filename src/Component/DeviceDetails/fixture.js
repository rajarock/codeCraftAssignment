import { tickWhite, morningWhite, dayDark, nightDark } from '../../Assets/images'

 const ShadesData  = [
    {
        colorCode : '#FF4563'
    },
    {
        colorCode : '#8245E6'
    },
    {
        colorCode : '#4AC0E0'
    },
    {
        colorCode : '#1089EB'
    },
    {
        colorCode : '#C791CD'
    }
]

const Modes = [{
    darkMode : morningWhite,
    lightMode : morningWhite,
    label : "Morning",
    value: "50%"
},{
    darkMode : dayDark,
    lightMode : dayDark,
    label : "Day",
    value: "30%"
},{
    darkMode : nightDark,
    lightMode : nightDark,
    label : "Night",
    value: "100%"
}]
 
export default ShadesData 
export { ShadesData, Modes } 