import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import loadingGear from "./loading-gear.gif";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
      <div className="app">
        <div className={` ${!isLoading && "d-none"}`}>
          <div className="loading">
            <img src={loadingGear} alt="" />
          </div>
        </div>

        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <Home setIsLoading={setIsLoading} />
          </Route>
          <Route path="/:postId">
            <PostDetails setIsLoading={setIsLoading} />
          </Route>
        </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default App;
