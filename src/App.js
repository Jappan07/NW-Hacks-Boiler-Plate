import React from "react"
import { Switch, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Homepage from "./containers/Homepage/Homepage"
import Playground from "./containers/Playground/Playground"
import ContactUs from "./components/ContactUs/ContactUs"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/playground" component={Playground} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;