import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {IText} from '../types';

const isDarkMode = 'dark';
// useColorScheme() === 'dark';

export const BrightText = (props: IText) => {
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: 'Arial',
        color: Colors.brightColor,
      }}>
      {props.children}
    </Text>
  );
};
export const MediumText = (props: IText) => {
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: 'Arial',
        color: Colors.mediumColor,
      }}>
      {props.children}
    </Text>
  );
};
export const DullText = (props: IText) => {
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: 'Arial',
        color: Colors.dullColor,
      }}>
      {props.children}
    </Text>
  );
};

export const Colors = {
  primaryBlue: '#3498db',
  backgroundColor: isDarkMode ? '#323232' : '#F3F3F3',
  bolderBackground: isDarkMode ? '#222222' : '#F3F3F3',
  lightGrey: '#DCDCDC',
  disabledColor: 'grey',
  borderColor: '#D3D3D3',
  bold: isDarkMode ? 'white' : 'black',
  brightColor: isDarkMode ? 'rgba(255,255,255, 0.87)' : 'rgba(0,0,0, 0.87)',
  mediumColor: isDarkMode ? 'rgba(255,255,255, 0.6)' : 'rgba(0,0,0, 0.6)',
  dullColor: isDarkMode ? 'rgba(255,255,255, 0.38)' : 'rgba(0,0,0, 0.38)',
};
