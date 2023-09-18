import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

Ionicons.loadFont().then(r => r);

type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
}
export interface IconProps {
    size: IconSizeProps['iconSizes'];
    name: string;
    color: string;
}

export const IconSizes = {
    small: 20,
    medium: 25,
    large: 30,
    extraLarge: 35,
    huge: 75,
    big: 100

};


export const Ionicon = ({size, name, color}: IconProps)=> (
    <Ionicons name={name} size={IconSizes[size]} color={color} />

)

