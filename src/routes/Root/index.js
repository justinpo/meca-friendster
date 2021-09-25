import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Message from 'routes/Message';

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/message">
          <Message />
        </Route>
        <Redirect to="/message" />
      </Switch>
    </Router>
  );
}

export default RootRouter;
