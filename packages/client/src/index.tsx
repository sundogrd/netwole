import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/index.js'

const appMount = document.querySelector('#app')
if (appMount) ReactDOM.render(<App />, appMount)

export default App
