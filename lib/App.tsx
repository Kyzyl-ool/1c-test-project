import React from 'react';
import { AuthPage } from 'pages/auth';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { MainPage } from 'pages/main';
import './App.scss';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'}>
        <MainPage />
      </Route>
      <Route path={'/auth'}>
        <AuthPage />
      </Route>
      <Redirect to={'/auth'} />
    </Switch>
  );
};

export default App;
