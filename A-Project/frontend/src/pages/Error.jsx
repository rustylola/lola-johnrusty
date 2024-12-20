import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  /* 
    useRouteError can use not only for 404, it can also
    for other status report.
  */
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Back Home</Link>
    </div>
  )
}

export default Error
