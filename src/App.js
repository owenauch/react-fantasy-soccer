import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'

import LineupSubmission from './LineupSubmission.js'
import Lineups from './Lineups.js'

const App = () => (
  <Router>
    <div>
      <List>
        <ListItem><Link to='/'>Lineups</Link></ListItem>
        <ListItem><Link to='/submit'>Lineup Submission</Link></ListItem>
      </List>
      <hr />

      <Route exact path='/' component={Lineups} />
      <Route path='/submit' component={LineupSubmission} />
    </div>
  </Router>
)

export default App
