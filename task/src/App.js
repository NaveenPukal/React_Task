import "./App.css";
import Login from "./Pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/login" exact={true} component={Login}></Route>

            <Route
              path="/dashboard"
              exact={true}
              component={DashboardPage}
            ></Route>
            <Redirect to="/login" />
          </Switch>
        </main>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
