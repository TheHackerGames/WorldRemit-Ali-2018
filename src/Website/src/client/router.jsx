import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import Allies from './pages/allies';
import AppRoot from './app-root';
import Home from './pages/home';
import Journal from './pages/journal';
import NotFound from './pages/notfound';
import SetupAlexa from './pages/setupAlexa';
import SetupFinish from './pages/setupFinish';
import SetupFitbit from './pages/setupFitbit';
import Volunteers from './pages/volunteers';

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
