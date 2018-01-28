import React from 'react'

const WeekSelector = (props) => (
  <select
    name='matchweek'
    value={props.matchweek}
    onChange={props.handleSelectChange}
  >
    <option value='weeks'>Weeks:</option>
    {props.matchweeks.map((item, key) => {
      return (<option
        key={item.id}
        value={item.id}>
        Week {item.week_number}: {item.start_date} to {item.end_date}
      </option>)
    })}
  </select>
)

export default WeekSelector
