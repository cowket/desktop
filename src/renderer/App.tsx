import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'

const Hello = () => {
  return (
    <div>
      <h1>Cowket Desktop Application Getting Started</h1>
      <HelloWorld />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  )
}
