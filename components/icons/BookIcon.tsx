import React from "react";
import { Path, Svg } from "react-native-svg";
import { NavIconProps } from "../../interfaces/NavIconProps";

const BookIcon = (props: NavIconProps) => {
    return (
        <Svg width="23" height="28" viewBox="0 0 23 28" fill='none'>
            <Path stroke='white' opacity={props.isActive === true ? '1' : "0.3"} d="M1 23.75C1 22.888 1.34241 22.0614 1.9519 21.4519C2.5614 20.8424 3.38805 20.5 4.25 20.5H21.8M1 23.75C1 24.612 1.34241 25.4386 1.9519 26.0481C2.5614 26.6576 3.38805 27 4.25 27H21.8V1H4.25C3.38805 1 2.5614 1.34241 1.9519 1.9519C1.34241 2.5614 1 3.38805 1 4.25V23.75Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default BookIcon;
