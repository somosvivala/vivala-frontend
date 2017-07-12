import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import orange from 'material-ui/colors/orange';
import red from 'material-ui/colors/red';

export default createMuiTheme({
    palette: createPalette({
        primary: orange,
        error: red,
    }),
});