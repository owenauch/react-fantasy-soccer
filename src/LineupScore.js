import React from 'react'

import styled from 'styled-components'

const OuterDiv = styled.div`
  border: 1px solid black;
`

const LineupScore = (props) => (
  <OuterDiv>
    <p><strong>Manager: </strong>{props.roster.manager_name}</p>
    <p><strong>Total Points: </strong>{props.roster.total_points}</p>
    <button onClick={() => props.handleClick(props.roster.id)}>Expand</button>
  </OuterDiv>
)

export default LineupScore
