import { StyledQuote } from "./styled/Quote.styled";


const Quote = () => {
  return (
    <StyledQuote>
        <h1>Advice #<span id="quote-id">105</span></h1>
        <p id="quote">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        
        <div className="divider">
            <svg id="mobile-divider" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            <svg id="desktop-divider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
    </StyledQuote>
  )
}

export default Quote