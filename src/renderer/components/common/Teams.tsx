import { useEuiTheme } from '@elastic/eui'
import React from 'react'
import styled from 'styled-components'

const TeamsWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.darkShade};
`

const Teams: React.FC = () => {
  const { euiTheme } = useEuiTheme()

  return <TeamsWrapper theme={euiTheme}>teams</TeamsWrapper>
}

export default Teams
