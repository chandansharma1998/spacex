
import CardList from './components/CardList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() { 
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <CardList/>
      </Container>
   </ThemeProvider>
  );
}

export default App;
