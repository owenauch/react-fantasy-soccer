import React from 'react'

import LineupDetail from './LineupDetail.js'

import styled from 'styled-components'

const OuterDiv = styled.div`
  border: 1px solid black;
`

const LineupScore = (props) => (
  <OuterDiv>
    <p><strong>Manager: </strong>{props.roster.manager_name}</p>
    <p><strong>Total Points: </strong>{props.roster.total_points}</p>
    {props.current_roster !== props.roster.id && <button
      onClick={() => props.handleClick(props.roster.id)}>Expand</button>}
    {props.current_roster === props.roster.id && <LineupDetail
      rosters={props.rosters}
      current_roster={props.current_roster}
      handleClose={props.handleClose}
    />}
  </OuterDiv>
)

export default LineupScore
