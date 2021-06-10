import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import routes from "./config/Routes";
import "./App.css";
import Theme from "./theme";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouterWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <ThemeProvider theme={Theme}>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component routes={route.routes} {...props} />}
      />
    </ThemeProvider>
  );
}

export default App;
