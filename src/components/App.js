import React, { Component } from 'react'
// import createHistory from 'history/createBrowserHistory'
// import { Link } from 'react=router'
export default class App extends Component {
  render () {
    const Atlantic = () => (
      <div>
        <h3>Atlantic Ocean</h3>
        <p>Atlantic Ocean covers approcimately 1/5th of the surface of the planet</p>
      </div>
    )
    const Pacific = () => (
      <div>
        <h3>Pacific Ocean</h3>
        <p>Ferdinand Magellan, portugese explorer, named the ocean in 1521</p>
      </div>
    )
    // const history = createHistory()

    const Match = ({ pattern, component: Component }) => {
      const pathname = window.location.pathname
      if (pathname.match(pattern)) {
        return (
          <Component />
        )
      } else {
        return null
      }
    }
    const Link = ({ to, children }) => (
      <a onClick={(e) => {
        e.preventDefault()
        history.push(to)
      }}
        href={to}
      >
        {children}
      </a>
    )
    return <div>
      <h2>Which Body of Water</h2>
      <ul>
        <li>
          <a href='/atlantic'>
            <code>ATLANTIC</code>
          </a>
        </li>
        <li>
          <a href='/pacific'>
            <code>PACIFIC</code>
          </a>
        </li>
      </ul>
      <Match pattern='/atlantic' component={Atlantic} />
      <Match pattern='/pacific' component={Pacific} />
    </div>
  }
}
