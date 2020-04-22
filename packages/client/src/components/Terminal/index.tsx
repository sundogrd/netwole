import * as React from 'react'
import Console from '../Console/index.js'

const Terminal: React.FunctionComponent = () => (
  <div className="terminal-window">
    <header>
      <div className="button red" />
      <div className="button yellow" />
      <div className="button green" />
    </header>
    <Console />
  </div>
)

export default Terminal
