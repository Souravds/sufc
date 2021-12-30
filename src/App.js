import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Header } from './components/Header';
import { useAuth } from './contexts/AuthContext';
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home';
import Store from "./pages/Store/Store";

const App = () => {
  const v = useAuth()
  console.log(v);
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>  
  );
};

export default App;
