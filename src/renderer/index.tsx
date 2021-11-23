import axios from 'axios'
import { render } from 'react-dom'
import App from './App'

axios.defaults.adapter = require('axios/lib/adapters/http')

render(<App />, document.getElementById('root'))
