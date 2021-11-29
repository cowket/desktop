import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import About from './views/About'
import Main from './views/Main'

import { EuiThemeProvider } from '@elastic/eui'

import '@elastic/eui/dist/eui_theme_light.css'
import '@elastic/eui/dist/eui_theme_dark.css'

export default function App() {
  return (
    <EuiThemeProvider>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </EuiThemeProvider>
  )
}
