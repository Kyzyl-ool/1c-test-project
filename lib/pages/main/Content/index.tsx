import React from 'react';
import { pages } from 'pages/index';
import { Route, Switch } from 'react-router-dom';

export const Content: React.FC = (props) => {
  return (
    <Switch>
      {pages.map((value) => (
        <Route key={value.path} exact path={value.path}>
          {value.content}
        </Route>
      ))}
    </Switch>
  );
};
