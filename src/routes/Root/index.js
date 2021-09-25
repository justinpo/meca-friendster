import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from 'routes/Login';
import Message from 'routes/Message';
import Profile from 'routes/Profile';

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default RootRouter;
