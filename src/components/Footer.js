import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({ isFetching }) => (
  <div style={{margin:5}}>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {" / "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {" / "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    <span style={{ display : "none" }}>fetching....</span>
  </div>
)

export default Footer