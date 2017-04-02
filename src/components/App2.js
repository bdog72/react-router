import React, { Component } from 'react'

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

export default class App2 extends Component {
  render () {
    const Breakbeat = () => (
      <div>
        <h3>Breakbeat</h3>
        <p>great to breakdance to</p>
      </div>
    )
    const House = () => (
      <div>
        <h3>House</h3>
        <p>great to dance to</p>
      </div>
    )

    return <div>
      <h2>What kind of dance music you like</h2>
      <ul className='list2'>
        <li><a href='/breakbeat'>Breakbeat</a></li>
        <li><a href='/house'>House</a></li>
        <li><a href='/progressive HOuse' />Progressive House</li>
      </ul>
      <hr />
      <Match pattern='/breakbeat' component={Breakbeat} />
      <Match pattern='/house' component={House} />
    </div>
  }
}
