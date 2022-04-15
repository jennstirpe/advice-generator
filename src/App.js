
import { useState, useEffect} from 'react';
import GlobalStyles from "./Components/Global";
import { ThemeProvider } from "styled-components";
import axios from 'axios';

import { StyledCard } from "./Components/styled/Card.styled";
import { StyledBtn } from "./Components/styled/Btn.styled";
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
  const [quoteId, setQuoteId] = useState(0);

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = async () => {
    const result = await axios("https://api.adviceslip.com/advice");
    const advice = result.data;

    const quoteId = advice.slip.id;
    const quoteText = advice.slip.advice;
    
    setQuoteId(quoteId);
    setQuote(quoteText)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        < GlobalStyles />
        <StyledCard>
          <Quote quoteId={quoteId} quote={quote} />
          <Btn handleClick={fetchQuote} />
        </StyledCard>
      </>
    </ThemeProvider>
    
  );
}

export default App;
