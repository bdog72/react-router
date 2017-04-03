import React from 'react'
import createHistory from 'history/createBrowserHistory'
// import { Link, Match } from 'react-router'
const Match = ({ pattern, component: Component }, { location }) => {
  const pathname = window.location.pathname
  if (pathname.match(pattern)) {
    return (
      <Component />
    )
  } else {
    return null
  }
}

Match.contextTypes = {
  location: React.PropTypes.object
}

const Link = ({ to, children }, { history }) => (
  <a
    onClick={(e) => {
      e.preventDefault()
      history.push(to)
    }}
    href={to}
    >
    {children}
  </a>
)

Link.contextTypes = {
  history: React.PropTypes.object
}

class Router extends React.Component {
  static childContextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object
  };
  constructor (props) {
    super(props)
    this.history = createHistory()
    this.history.listen(() => this.forceUpdate())
  }
  getChildContext () {
    return {
      history: this.history,
      location: window.location
    }
  }

  render () {
    return this.props.children
  }
}

const App2 = () => (

  <Router>
    <div className='app2'>
      <h2>What dance music you like</h2>
      <ul className='list2'>
        <li><Link to='/breakbeat'>Breakbeat</Link></li>
        <li><Link to='/house'>House</Link></li>
        <li><a href='/progressive HOuse' />Progressive House</li>
      </ul>
      <hr />
      <Match pattern='/breakbeat' component={Breakbeat} />
      <Match pattern='/house' component={House} />
    </div>
  </Router>
  )

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
export default App2
