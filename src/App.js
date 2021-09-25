import './App.scss';

/*import Routes from './Page/Routes';*/
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from './Page/Login';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import Dashboard from './Page/Dashboard';
import UserList from './Page/User';
import ForgotPassword from './Page/ForgotPassword';

import Profile from './Components/User/Profile';

function App() {
  return (
  	<Router>
    <div className="App">
      <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/user" component={UserList} />
          <PrivateRoute path="/profile" component={Profile} />
          <PublicRoute path="/" component={Login} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
