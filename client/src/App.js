import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"
import HomePage from "./pages/HomePage"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import UserAuth from "./UserAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>    
      <div className="App">
        <Switch>
          <Route path="/login">
            {
              UserAuth() ? <HomePage /> : <Login />
              //<Login />
            }
          </Route>
          <Route path="/signup">
            {
              UserAuth() ? <HomePage /> : <Signup />
              //<Signup />
            }
          </Route>
          <Route path="/:slug/profile">
            {
              UserAuth() ? <Profile /> : <Login />
              //<Profile/>
            }
          </Route>
          <Route path="/:slug">
            <DashBoard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
