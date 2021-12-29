//import logo from './logo.svg';
//import './App.css';
import './style.css';
import Navbar from './navbar';
import Footer from './footer';
import AboutMe from './about-me';
import Achievements from './achievements';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <AboutMe/>
            </Route>

            <Route path="/achievements">
              <Achievements/>
            </Route>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
