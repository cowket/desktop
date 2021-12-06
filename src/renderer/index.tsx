import { render } from 'react-dom'
import App from './App'
import setup from './api/setup'
import './styles/global.scss'
import '@elastic/eui/dist/eui_theme_light.css'

setup()

render(<App />, document.getElementById('root'))
