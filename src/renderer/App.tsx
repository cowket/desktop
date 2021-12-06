import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { EuiThemeDefault, EuiThemeProvider, useEuiTheme } from '@elastic/eui'
import { ThemeProvider } from 'styled-components'

import About from './views/About'
import Main from './views/Main'
import Layout from './components/common/Layout'
import Teams from './components/common/Teams'
import GlobalStyle from './styles/global'

export default function App() {
  const { euiTheme } = useEuiTheme()

  return (
    <EuiThemeProvider theme={EuiThemeDefault} colorMode="light">
      <ThemeProvider theme={euiTheme}>
        <GlobalStyle theme={euiTheme} />
        <Layout teamRender={<Teams />}>
          <Router>
            <Switch>
              <Route path="/" component={Main} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </EuiThemeProvider>
  )
}
