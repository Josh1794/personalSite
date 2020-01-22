import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Navigation from "./Navigation";
import "../styles/App.css";

const Home = lazy(() => import("./Home"));
const Portfolio = lazy(() => import("./Portfolio"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense
        fallback={
          <div className="fallbackLoader">
            Loading
            <Spinner animation="border" variant="warning" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
