import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return <div>
      <h2>Which Body of Water</h2>
      <ul>
        <li>
          <a href='/atlantic'>
            <code>atlantic</code>
          </a>
        </li>
        <li>
          <a href='/pacific'>
            <code>pacific</code>
          </a>
        </li>
      </ul>
    </div>
  }
}
