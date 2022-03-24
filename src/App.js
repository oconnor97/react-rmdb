import React from 'react';
// Components
import Header from './components/Header/index';
import Home from "./components/Home";

// styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
