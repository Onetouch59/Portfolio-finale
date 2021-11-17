import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1, Project2, Project3, Project4} from './pages/Projects';
import {AnimatePresence} from "framer-motion";

const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 400);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 400);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("project-1");
            }, 400);
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project-4");
            }, 400);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);



  return (
    <AnimatePresence>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/portfolio" component={Home} />
      <Route exact path="/portfolio/project-1" component={Project1} />
      <Route exact path="/portfolio/project-2" component={Project2} />
      <Route exact path="/portfolio/project-3" component={Project3} />
      <Route exact path="/portfolio/project-4" component={Project4} />
      <Route exact path="/portfolio/contact" component={Contact} />
      <Redirect to="/portfolio" />
    </Switch>
    </AnimatePresence>
  );
};

export default App;