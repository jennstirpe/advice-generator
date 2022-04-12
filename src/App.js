
import GlobalStyles from "./Components/Global";
import { ThemeProvider } from "styled-components";

import { StyledCard } from "./Components/styled/Card.styled";
import Quote from "./Components/Quote";
import Btn from "./Components/Btn";


const theme = {
  colors: {
    bgBody: 'hsl(218, 23%, 16%)',
    bgCard: 'hsl(217, 19%, 24%)',
    quoteText: 'hsl(193, 38%, 86%)',
    accent: 'hsl(150, 100%, 66%)',
    grayishBlue: 'hsl(217, 19%, 38%)'
  },
  fontSize: {
    header: '12px',
    quote: '28px'
  }
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        < GlobalStyles />

        <StyledCard>
          <Quote />
          <Btn />
          
        </StyledCard>




      </>
    </ThemeProvider>
    
  );
}

export default App;
