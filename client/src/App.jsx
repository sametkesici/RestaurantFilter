import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UptadePage from "./routes/UptadePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants/:id/update" component={UptadePage} />
            <Route path="/restaurants/:id" component={RestaurantDetailPage} />
          </Switch>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
