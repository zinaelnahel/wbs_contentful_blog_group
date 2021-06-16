import React from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Blog from './components/Blog';
import  { Switch, Route } from 'react-router-dom'
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/blog/:id' component={Blog} />
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
