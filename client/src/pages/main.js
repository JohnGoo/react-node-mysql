import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Roster, Schedule } from './component';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
);
