import React from 'react'
import { useTeams } from 'renderer/hooks/team'
import styled from 'styled-components'

const TeamsWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.lightShade};
`

const Teams: React.FC = () => {
  const [teams, loading] = useTeams()

  return <TeamsWrapper>{loading ? <div>asdasf</div> : teams.length}</TeamsWrapper>
}

export default Teams
