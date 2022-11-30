import React from 'react';

import './index.css'
import App from './App.js';
import reactDOM from 'react-dom/client';

import Container from "./context/Container"

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
  </Container>
);
