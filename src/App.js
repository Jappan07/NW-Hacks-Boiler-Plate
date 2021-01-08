import React from "react"
import { Switch, Route } from "react-router"
import Layout from "./components/Layout/Layout"
import Homepage from "./containers/Homepage/Homepage"
import Playground from "./containers/Playground/Playground"
import ContactUs from "./components/ContactUs/ContactUs"

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/playground" component={Playground} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;