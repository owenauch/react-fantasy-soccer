import React from 'react'

import styled from 'styled-components'

const OuterDiv = styled.div`
  border: 1px solid black;
`

const TD = styled.td`
  border: .5px solid black;
  text-align: center;
`

const TH = styled.th`
  border: .5px solid black;
  text-align: center;
  padding: 1px;
`

const LineupDetail = (props) => {
  const roster = props.rosters.find((item) => {
    return item.id == props.current_roster
  })
  const players = roster.player_info

  return (
    <OuterDiv>
      <p><strong>Manager: </strong>{roster.manager_name}</p>
      <p><strong>Total Points: </strong>{roster.total_points}</p>
      <table>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Minutes Played</TH>
            <TH>Goals</TH>
            <TH>Penalty Goals</TH>
            <TH>Assists</TH>
            <TH>Shots on Goal</TH>
            <TH>Shots off Goal</TH>
            <TH>Crosses</TH>
            <TH>Tackles</TH>
            <TH>Yellow Cards</TH>
            <TH>Second Yellow Cards</TH>
            <TH>Red Cards</TH>
            <TH>Saves</TH>
            <TH>Goals Conceded</TH>
            <TH>Points</TH>
          </tr>
        </thead>
        <tbody>
          {players.map((item, key) => {
            return (
              <tr>
                <TD>{item.name}</TD>
                <TD>{item.minutes_played}</TD>
                <TD>{item.goals}</TD>
                <TD>{item.penalty_goals}</TD>
                <TD>{item.assists}</TD>
                <TD>{item.shots_on_goal}</TD>
                <TD>{item.shots_off_goal}</TD>
                <TD>{item.crosses}</TD>
                <TD>{item.successful_tackles}</TD>
                <TD>{item.yellow_cards}</TD>
                <TD>{item.yellow_red_cards}</TD>
                <TD>{item.red_cards}</TD>
                <TD>{item.shots_saved}</TD>
                <TD>{item.goals_conceded}</TD>
                <TD>{item.points}</TD>
              </tr>
            )
          })}
        </tbody>
      </table>
    </OuterDiv>
  )
}

export default LineupDetail
