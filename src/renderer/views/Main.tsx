import { EuiText, useEuiTheme } from '@elastic/eui'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const Main: React.FC<RouteComponentProps> = () => {
  const { euiTheme } = useEuiTheme()

  return (
    <div>
      <EuiText color={euiTheme.colors.primary}>
        Cowket Desktop Application Main Context
      </EuiText>
    </div>
  )
}

export default Main
