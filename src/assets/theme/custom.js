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
    reverse: {
        color: 'white',
    },
    default: {
        color: '#f5f5f5',
    },
    defaultDarken: {
        color: '#e1e1e1',
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
            },
            raisedAccent: {
                color: 'white',
                backgroundColor: vivalaInstituteColor,
                '&:hover': {
                    backgroundColor: vivalaInstituteColor,
                },
            },
            raisedPrimary: {
                color: 'white',
            },
            raisedContrast: {
                color: '#333',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                },
            },
            dense: {
                minWidth: 20,
                minHeight: 10,
                height: 25,
                width: 25,
                padding: 0
            },
        },
        MuiCircularProgress: {
            primaryColor: {
                color: vivalaColor,
            },
            accentColor: {
                color: vivalaInstituteColor,
            },
        },
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
        },
        title: {
            ...customTypography.title,
            color: vivalaColor,
        },
        body1: {
            ...customTypography.body1,
            fontSize: 16,
        },
        button: {
            ...customTypography.button,
            textTransform: 'none',
            fontSize: 17,
            fontWeight: 600,
        }
    },
};

export default theme;