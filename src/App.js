
import { useState, useEffect} from 'react';
import GlobalStyles from "./Components/Global";
import { ThemeProvider } from "styled-components";
import axios from 'axios';

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
  const [quote, setQuote] = useState("");
  const [newQuote, setNewQuote] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios("https://api.adviceslip.com/advice");
      let quoteText = result.data.slip.advice;
      
      setQuote(quoteText); 
      setNewQuote(false)
    }
    fetchQuote();
    

  }, [newQuote])

  const handleClick = () => {
    setNewQuote(true)
  }


  return (
    <ThemeProvider theme={theme}>
      <>
        < GlobalStyles />
        <StyledCard>
          <Quote quote={quote} />
          <Btn handleClick={handleClick}/>
        </StyledCard>
      </>
    </ThemeProvider>
    
  );
}

export default App;
