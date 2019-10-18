import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from 'react-router-dom'

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo/>
    </Router>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function QueryParamsDemo() {
  let query = useQuery()
  return(
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/account?name=netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/account?name=zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/account?name=Yahoo" >Yahoo</Link>
        </li>
        <li>
          <Link to="/account?name=modus-create">Modus Create</Link>
        </li>
      </ul>
      <Child name={query.get('name')} />
    </div>
  )
}

function Child({name}) {
  console.log(name)
  return (
    <div>
      {name? (
        <h3>The <code>name</code> in the query string is &quot;{name}&quot;</h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  )
}