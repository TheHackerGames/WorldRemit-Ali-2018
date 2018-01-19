import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './app-root';
import Home from './home';
import SetupAlexa from './setupAlexa';
import SetupFitbit from './setupFitbit';
import SetupFinish from './setupFinish';
import Journal from './journal';
import Volunteers from './volunteers';
import Allies from './allies';
import NotFound from './notfound';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/setup1" component={SetupAlexa}/>
        <Route path="/setup2" component={SetupFitbit}/>
        <Route path="/setup3" component={SetupFinish}/>
        <Route path="/volunteers" component={Volunteers}/>
        <Route path="/journal" component={Journal}/>
        <Route path="/allies" component={Allies}/>

        <Route path="*" component={NotFound}/>        
    </Router>
  );
};

export default AppRouter;
