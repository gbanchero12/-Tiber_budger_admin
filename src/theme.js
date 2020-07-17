import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#049ce4',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    black: {
      main: '#9999'
    }
  },
  background: {
    default: '#fff',
  },
});

export default theme;
