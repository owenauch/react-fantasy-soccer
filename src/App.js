import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LineupSubmission from './LineupSubmission.js'
import Lineups from './Lineups.js'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Lineups</Link></li>
        <li><Link to='/submit'>Lineup Submission</Link></li>
      </ul>
      <hr />

      <Route exact path='/' component={Lineups} />
      <Route path='/submit' component={LineupSubmission} />
    </div>
  </Router>
)

export default App
