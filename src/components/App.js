import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Form from './Form';
import FormInput from './FormInput';
import Ancestor from './Ancestor';

function App() {
  return (
<Switch>
  <Route exact path="/">
    <Landing/>
  </Route>
  <Route path="/form" component={Form}/>
  <Route path="/form-input" component={FormInput}/>
  <Route path="/ancestor" component={Ancestor}/>
</Switch>
  );
}

export default App;
