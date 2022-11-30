import React from 'react';


import App from './App.js';
import reactDOM from 'react-dom';

import Container from "./context/Container"

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
  </Container>
);
