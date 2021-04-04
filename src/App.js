import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Pages/Home'
import PageNotFound from './Components/ErrorPage/Pages/PageNotFound'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer';

function App() {

  const renderRouter = () => {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
          </div>
          <Footer/>
      </div>
    );
  }
  return <BrowserRouter>{renderRouter()}</BrowserRouter>
}

export default App;
