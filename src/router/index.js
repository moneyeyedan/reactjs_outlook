import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// import Login from '../component/login';
// import Profile from '../component/profile';
// import SignUp from '../component/signUp';
import Sidenav from '../component/sidenav';
function AppRouter (props){
    return(
        <Router>
            <Switch>
                <Redirect exact path="/" to='/sidenav'/>
                <Route exact component={Sidenav} path='/first' />
                <Route exact component={Sidenav} path='/second' />
                {/* <Route exact component={Sidenav} path='/sign_up' /> */}
                <Route exact component= {Sidenav} path='/sidenav'/>
            </Switch>
        </Router>
    )
}
export default AppRouter;