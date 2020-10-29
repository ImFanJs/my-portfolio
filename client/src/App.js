import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cover from './screens/Cover'
import Skills from './screens/Skills'
import Experience from './screens/Experience'
import Education from './screens/Education'
import Projects from './screens/Projects'
import NotFound from './screens/NotFound'
// import Contacts from './projects/contacts/Contacts'

const App = () => {
  return (
    <CssBaseline>
      <Router>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/projects/contacts" component={Contacts} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </CssBaseline>
  )
}

export default App
