import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GlobalStyles } from './theme/GlobalStyles.styled';
import { Container } from './theme/GlobalStyles.styled';

const root = ReactDOM.createRoot(document.body);
root.render(
  <>
    <GlobalStyles/>
      <React.StrictMode>
        <Container>
          <App />
        </Container>
    </React.StrictMode>
  </>
 
);
