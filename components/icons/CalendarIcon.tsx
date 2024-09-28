import React from "react";
import { Path, Svg } from "react-native-svg";
import { NavIconProps } from "../../interfaces/NavIconProps";

const CalendarIcon = (props: NavIconProps) => {
    return (
        <Svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path stroke='white' opacity={props.isActive === true ? '1' : "0.3"} d="M17.9 1V6.2M7.5 1V6.2M3.6 3.6H21.8C23.2359 3.6 24.4 4.76406 24.4 6.2V24.4C24.4 25.8359 23.2359 27 21.8 27H3.6C2.16406 27 1 25.8359 1 24.4V6.2C1 4.76406 2.16406 3.6 3.6 3.6Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default CalendarIcon;



