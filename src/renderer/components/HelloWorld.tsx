import React from 'react'
import { useTeams } from 'renderer/hooks/team'

const HelloWorld: React.FC = () => {
  const [teams, loading] = useTeams()

  return loading ? <div>Loading Teams...</div> : <div>{teams.length}</div>
}

export default HelloWorld
