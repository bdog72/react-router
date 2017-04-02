import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App1 from './components/App1'

import './styles/screen.scss'

const root = document.getElementById('root')

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    root
  )
}

render(<App1 />)

if (module.hot) {
  module.hot.accept('./components/App1', () => {
    const NextApp = require('./components/App1').default
    render(<NextApp />)
  })
}
