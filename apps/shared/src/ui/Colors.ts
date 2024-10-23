import { generate } from '@ant-design/colors';
import theme from 'styled-theming';

export const Colors = {
    light:{
        primary: generate('#fff')[5],
        secondary: generate('#ececef')[6],
        bordered: generate('#dcdcde')[5],
        text: generate('#434248')[5],
        textWarning: '#c91c00',
        placeholder: '#626168', 
        currentTheme: 'light'
    },
    dark: {
        primary: generate('#1f1e24')[5],
        secondary: generate('#434248')[5],
        bordered: generate('#434248')[5],
        text:  generate('#ececef')[5],
        textWarning: '#f57f6c',
        placeholder: '#bfbfc3',
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