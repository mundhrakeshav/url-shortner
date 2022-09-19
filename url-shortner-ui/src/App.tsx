
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HandleRedirectContainer from "./components/HandleRedirectContainer";
import URLShortnerForm from './components/URLShortnerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" >
              <URLShortnerForm />
            </Route>
            <Route path="/:shortID" >
              <HandleRedirectContainer />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
