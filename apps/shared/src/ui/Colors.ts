import { generate } from '@ant-design/colors';
import theme from 'styled-theming';

export const Colors = {
    light:{
        primary: generate('#EFEFF3')[5],
        secondary: generate('#F3F3F3')[6],
        bordered: generate('#EBEBEB')[5],
        text: generate('#000000')[5],
        textWarning: '#d74848',
        placeholder: '#787E8B', 
        currentTheme: 'light'
    },
    dark: {
        primary: generate('#000000')[5],
        secondary: generate('#1F2023')[5],
        bordered: generate('#26272C')[5],
        text:  generate('#ffffff')[5],
        textWarning: '#ff0000',
        placeholder: '#787E8B',
        currentTheme: 'dark'
    }
 }

 export const backgroundColor = theme('mode', {
    light: Colors.light.primary,
    dark: Colors.dark.primary,
  });

export const textColor = theme('mode', {
    light: Colors.light.text,
    dark: Colors.dark.text,
  });

export const borderColor = theme('mode', {
    light: Colors.light.bordered,
    dark: Colors.dark.bordered,
  });

  export const hoverBackgroundColor = theme('mode', {
    light: Colors.light.secondary,
    dark: Colors.dark.secondary,
  });
  
  export const hoverTextColor = theme('mode', {
    light: Colors.light.primary,
    dark: Colors.dark.primary,
  });

  export const warningTextColor = theme('mode', {
    light: Colors.light.textWarning,
    dark: Colors.dark.textWarning,
  });

  export const placeholderColor = theme('mode', {
    light: Colors.light.placeholder,
    dark: Colors.dark.placeholder,
  });

  export const currentTheme = theme('mode', {
    light: Colors.light.currentTheme,
    dark: Colors.dark.currentTheme,
  });