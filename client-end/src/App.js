import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import Navigation from "./components/Auth/Navigation";
import PrivateRoute from "./components/Auth/PrivateRoute";
import TaskManager from "./views/TaskManager";
import TaskDashboard from "./views/TaskDashboard";

const App = () => {
  return (
    <Router>
      <>
        <Navigation></Navigation>
        <Switch>
          {/* Login and Register routes */}
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />

          {/* Protected route (requires authentication) */}
          <PrivateRoute path="/tasks" component={TaskManager} />

          {/* Private route for task dashboard */}
          <PrivateRoute path="/dashboard" component={TaskDashboard} />

          {/* Default route (when no matching route is found) */}
          <Route path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
