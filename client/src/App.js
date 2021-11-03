import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './views/UpdateAuthor';
import Home from './views/Home';
import AllAuthorsTable from './components/AllAuthorsTable';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAuthor from './views/CreateAuthor';

function App() {
  const [domChange, setDomChange] = useState(false)

  return (
    <div className="App h-screen w-screen ">
      <BrowserRouter>
        <Route exact path="/">
          <Home domChange={domChange} setDomChange={setDomChange}/>
        </Route>
        <Route exact path="/authors/:id/edit">
          <UpdateAuthor domChange={domChange} setDomChange={setDomChange}/>
        </Route>
        <Route exact path="/authors/new">
          <CreateAuthor btnText="Add author" domChange={domChange} setDomChange={setDomChange} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
