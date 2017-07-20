import { createMuiTheme, createTypography, createPalette } from 'material-ui/styles';
import { teal, deepOrange } from 'material-ui/colors';

const vivalaColor = '#FF6D20';
const vivalaInstituteColor = '#10A5A3';

let theme = createMuiTheme({
    vivala: {
        color: vivalaColor
    },
    institute: {
        color: vivalaInstituteColor,
        lightColor: '#3fb7b5'
    },
    overrides: {
        MuiTypography: {
            colorAccent: {
                color: vivalaInstituteColor,
            },
        },
        MuiButton: {
            flatPrimary: {
                color: 'white',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            }
        }
    }
});
const customTypography = createTypography(theme.palette, {
    fontFamily: 'Titillium Web',
});

const customPallete = createPalette({
    primary: {
        ...deepOrange,
        500: vivalaColor,
        A700: vivalaColor,
        A200: vivalaColor,
    },
    secondary: {
        ...teal,
        500: vivalaInstituteColor,
    }
});

theme = {
    ...theme,
    palette: {
        ...customPallete,
        input: {
            ...customPallete.input,
            bottomLine: '#ccc',
            inputText: vivalaColor,
        },
        text: {
            ...customPallete.text,
            primary: '#777'
        }
    },
    typography: {
        ...customTypography,
        headline: {
            ...customTypography.display1,
            color: vivalaColor,
            textTransform: 'uppercase',
        },
        subheading: {
            ...customTypography.subheading,
            color: vivalaColor,
        }
    },
};

console.log(theme)

export default theme;