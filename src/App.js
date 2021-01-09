import React, { Suspense } from "react"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Homepage from "./containers/Homepage/Homepage"
import Playground from "./containers/Playground/Playground"
import ContactUs from "./components/ContactUs/ContactUs"
import Login from "./containers/Auth/Login/Login"
import Logout from "./containers/Auth/Logout/Logout"

import { UseStateValue } from "./store/StateProvider"

const App = () => {
  const [{user}] = UseStateValue();
  let routes;
  if (!user) {
    routes = (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/u/login" component={Login} />
        <Redirect to="/u/login" />
      </Switch>
    );
  } else {
    routes = ( 
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/Playground" component={Playground} />
          <Route exact path="/u/logout" component={Logout} />
          {/* <Redirect to="/Playground" /> */}
        </Switch>
    </Suspense>
    );
  }
  
  return (
    <BrowserRouter>
      <Layout>
        {routes}
      </Layout>
    </BrowserRouter>
  );
}

export default App;