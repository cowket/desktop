import { render } from 'react-dom'
import App from './App'
import setup from './api/setup'

setup()

render(<App />, document.getElementById('root'))
