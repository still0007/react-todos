import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({ isFetching }) => (
  <div>
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {" / "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {" / "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    {" - "}
    <span style={{ display : isFetching ? "inline" : "none" }}>fetching....</span>
  </div>
)

export default Footer