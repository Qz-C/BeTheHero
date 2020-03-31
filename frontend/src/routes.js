import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
    return(
        <BrowserRouter>
            {/* Switch ensures that only one route will be execute 
            at moment*/}
            <Switch>
                {/* the keyword exact must exact must be used 
                because the react-router-dom , looks only for the began
                of the paths and all the paths has slash*/}
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes;