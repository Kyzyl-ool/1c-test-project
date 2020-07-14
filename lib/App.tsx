import React, { useEffect } from 'react';
import { AuthPage } from 'pages/auth';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { MainPage } from 'pages/main';
import './App.scss';
import { initDB } from './localStorageDB';

const App: React.FC = () => {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <Switch>
      <Route path={'/auth'}>
        <AuthPage />
      </Route>
      <Route path={'/'}>
        <MainPage />
      </Route>
      <Redirect to={'/auth'} />
    </Switch>
  );
};

export default App;
