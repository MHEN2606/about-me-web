//import logo from './logo.svg';
//import './App.css';
import './style.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import AboutMe from './about-me';
import Achievements from './achievements';
import Activities from './activities';
import Education from './education';
import SchoolDetail from './schooldetail';

function App() {

  const [achievements, setAchievements] = useState(null);
  const [activities, setActivities] = useState(null);
  const [education, setEducation] = useState(null);

  useEffect( () => {
    fetch("http://localhost:8000/achievements")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAchievements(data);
      })
    
      fetch('http://localhost:8000/activities')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setActivities(data);
        })

      fetch('http://localhost:8000/education')
        .then(res => {
          return res.json();
        })
        .then(data =>{
          setEducation(data);
        })
  },[]);

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
              {achievements && <Achievements achievements={achievements}/>}
            </Route>

            <Route path="/activities">
              {activities && <Activities activities={activities}/>}
            </Route>

            <Route path="/education">
              {education && <Education education={education}/>}
            </Route>

            <Route path="/schooldetail/:id">
              {education && <SchoolDetail education={education}/>}
            </Route>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
