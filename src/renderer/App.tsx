import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { EuiThemeProvider } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'
import '@elastic/eui/dist/eui_theme_dark.css'

import About from './views/About'
import Main from './views/Main'
import Layout from './components/Layout'

export default function App() {
  return (
    <EuiThemeProvider>
      <Layout teamRender={<div>Team Render</div>}>
        <Router>
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Layout>
    </EuiThemeProvider>
  )
}
