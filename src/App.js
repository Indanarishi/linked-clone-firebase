import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;