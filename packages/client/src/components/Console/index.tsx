import * as React from 'react'
import Typist from '../Typist/index.js'
import text from './text.js'

const Console: React.FunctionComponent = () => (
  <div>
    <div style={{ display: 'flex', width: '750px' }} id="console">
      <Typist file={text} />
    </div>
  </div>
)

export default Console
