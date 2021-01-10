import React, { Suspense } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from "./containers/Layout/Layout"
import Homepage from "./containers/Homepage/Homepage"
import PlaygroundWelcome from "./containers/Playground/PlaygroundWelcome/PlaygroundWelcome"
import VideoInput from "./containers/Playground/VideoInput/VideoInput"
import Playground from "./containers/Playground/Playground/Playground"
import ContactUs from "./components/ContactUs/ContactUs"
import Login from "./containers/Auth/Login/Login"
import Register from "./containers/Auth/Register/Register"
import Logout from "./containers/Auth/Logout/Logout"
import PrivateRoute from "./PrivateRoute";

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact-us" component={ContactUs} />
            <PrivateRoute exact path="/playground" component={PlaygroundWelcome} />
            <Route path="/playground/video-input" component={VideoInput} />
            <Route path="/playground/output" component={Playground} />
            <Route path="/u/login" component={Login} />
            <Route path="/u/register" component={Register} />
            <PrivateRoute Route path="/u/logout" component={Logout} />
          </Switch>
        </Suspense >
      </Layout>
    </BrowserRouter>
  );
}

export default App;